// Importing Link from react router dom to navigate between pages with refeshing the whole app 
import { Link } from "react-router-dom";
// Importing custom hook to use global state dispatch actions
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	// Destrucing global store and dispatch function from my custom hook
	const { store, dispatch } = useGlobalReducer()
	return (
		// the outer navbar wrapper with bootstrap classes for light background
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				{/* Link that takes you back to the home page when clicked */}
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars</span>
				</Link>
				{/* Dropdown section aligned to the right (ml-auto = margin-left: auto) */}
				<div className="ml-auto dropdown">
					{/* This is the button that toggles the dropdown list */}
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites</button>
					{/* This unordered list contains the actual dropdown items */}
					<ul className="dropdown-menu">
						{/* Looping through the list of favorites from the global store */}
						{store.favorites.map((favorite) => {
							return (
								<li>

									<Link to={
										favorite.type === "people" ? `/people/${favorite.uid}` :
											favorite.type === "planets" ? `/planets/${favorite.uid}` :
												`/vehicles/${favorite.uid}`
									}>
										{favorite.name}
									</Link>
									<button
										className="delete-btn"
										onClick={() => dispatch({
											type: "remove_favorite",
											payload: { removename: favorite.name, removeuid: favorite.uid, removeurl: favorite.url }
										})}
									>
										🗑️
									</button>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
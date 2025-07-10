import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars</span>
				</Link>
				<div className="ml-auto dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites</button>
					<ul className="dropdown-menu">
						{store.favorites.map((favorite) => {
							return (
								<li>
									//i left off here 
									<Link to={"/"} >
									{favorite.name}
									</Link>
									<button
										className="delete-btn"
										onClick={() => dispatch({
											type: "remove_favorite",
											payload: { removename: favorite.name, removeuid:favorite.uid, removeurl: favorite.url }
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
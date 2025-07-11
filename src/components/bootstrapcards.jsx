import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Peoplecard = (props) => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796"
                    className="card-img-top"
                    alt={props.character.name}
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {props.character.name} :{props.id}
                    </h5>
                    <div className="card-buttons">
                        <Link to={"/people/" + props.id}>
                            <button className="btn btn-primary">Learn more info!</button>
                        </Link>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: "add_favorite",
                                    payload: {
                                        name: props.character.name,
                                        uid: props.id,
                                        url: props.character.url,
                                        type: "people",
                                    },
                                })
                            }
                            className="btn btn-primary"
                        >
                            Add Favorites
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Planetcard = (props) => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/databank_abafar_01_169_475b5d42.jpeg?region=0%2C0%2C1560%2C878"
                    className="card-img-top"
                    alt={props.planet.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.planet.name}</h5>
                    <div className="card-buttons">
                        <Link to={"/planets/" + props.id}>
                            <button className="btn btn-primary">Learn more info!</button>
                        </Link>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: "add_favorite",
                                    payload: {
                                        name: props.planet.name,
                                        uid: props.id,
                                        url: props.planet.url,
                                        type: "planets",
                                    },
                                })
                            }
                            className="btn btn-primary"
                        >
                            Add Favorites
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Vehiclescard = (props) => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/sandcrawler-main_eb1b036b.jpeg?region=251%2C20%2C865%2C487"
                    className="card-img-top"
                    alt={props.vehicles.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.vehicles.name}</h5>
                    <div className="card-buttons">
                        <Link to={"/vehicles/" + props.id}>
                            <button className="btn btn-primary">Learn more info!</button>
                        </Link>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: "add_favorite",
                                    payload: {
                                        name: props.vehicles.name,
                                        uid: props.id,
                                        url: props.vehicles.url,
                                        type: "vehicles",
                                    },
                                })
                            }
                            className="btn btn-primary"
                        >
                            Add Favorites
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const StarWarsInfo = (props) => {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796"
                        className="img-fluid rounded-start"
                        alt="..."
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text">
                            <small className="text-body-secondary">
                                Last updated 3 mins ago
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

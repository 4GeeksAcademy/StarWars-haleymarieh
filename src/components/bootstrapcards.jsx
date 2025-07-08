import { Link } from "react-router-dom";
export const Peoplecard = (props) => {


    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.character.name}  :{props.id}</h5>
                    <p className="card-text"></p>
                    <Link to={"/details/" + props.id} ><span className="btn btn-primary">Learn more info!</span></Link>
                </div>
            </div>
        </div>
    )
};

export const Planetcard = (props) => {


    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://lumiere-a.akamaihd.net/v1/images/databank_abafar_01_169_475b5d42.jpeg?region=0%2C0%2C1560%2C878" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.planet.name}</h5>
                    <p className="card-text"></p>
                    <a href="#" className="btn btn-primary">Learn more info!</a>
                </div>
            </div>
        </div>
    )
};

export const StarWarsInfo = (props) => {

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796" className="img-fluid rounded-start" alt="..." />
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

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const People = () => {

    const [people, setPeople] = useState([]);
    const { uid } = useParams()

    useEffect(
        () => {
            fetch(`https://www.swapi.tech/api/people/${uid}`)
                .then(resp => resp.json())
                .then(StarWarsInfo => {
                    console.log(StarWarsInfo.result.properties);
                    setPeople(StarWarsInfo.result.properties);
                })
                .catch(error => {
                    console.error("Error fetching StarWarsInfo:", error);
                })
        }, [])

    return (
        <div>  <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{people.name}</h5>
                        <p className="card-text">{people.birth_year}</p>
                        <p className="card-text">{people.skin_color}</p>
                        <p className="card-text">{people.gender}</p>
                        <p className="card-text">{people.hair_color}</p>
                        <p className="card-text">{people.eye_color}</p>
                        <p className="card-text">{people.height}</p>
                        <p className="card-text">{people.mass}</p>

                        <p className="card-text">
                            <small className="text-body-secondary">
                                Last updated 3 mins ago
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div></div>
    )
}
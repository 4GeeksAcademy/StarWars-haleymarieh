//Importing React tools: useEffect (runs when the component loads) and useState (to store and manage data)
import React, { useEffect, useState } from "react";
// useParams let us access dynamic route parameter from the URL, like/people/:uid
import { useParams } from "react-router-dom";

//This is your People component, used to display detailed info for a single character 
export const People = () => {

    //Setting up a piece of state to hold the character's info
    //Starts as an empty array but will become an object with the character's properties
    const [people, setPeople] = useState([]);

    //Destructuring the `uid` from the URL using useParams 
    const { uid } = useParams()

    // useEffect runs the fetch logic once when the component first mounts (because of the empty [])
    useEffect(
        () => {
            // Fetching the detailed character data using the uid from the URL
            fetch(`https://www.swapi.tech/api/people/${uid}`)
                .then(resp => resp.json()) // converting the response to JSON
                .then(StarWarsInfo => {
                    console.log(StarWarsInfo.result.properties);// Logging the character info to check in dev tools
                    setPeople(StarWarsInfo.result.properties);// Storing the character's details in state
                })
                .catch(error => {
                    // Handling errors (like if the API is down or something goes wrong)
                    console.error("Error fetching StarWarsInfo:", error);
                })
        }, []) //Runs only once on first render 


        //The return block defines what will show up on the page
    return (
        <div>  
            {/* Bootstrap card layout to display the character info */}
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                {/* Image on the left side right now is a place holder */}
                <div className="col-md-4">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796" className="img-fluid rounded-start" alt="..." />
                </div>
                {/* Text content on the right side, displaying character properties */}
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
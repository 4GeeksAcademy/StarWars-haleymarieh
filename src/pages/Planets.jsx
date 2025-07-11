// Importing necessary React tools: useEffect for running code on mount, useState for managing data
import React, { useEffect, useState } from "react";
// useParams lets me access the URL parameters (like uid) passed into the route
import { useParams } from "react-router-dom";

// This is my planets component it shows the details for one specific planet
export const Planets = () => {
  

    //creating a piece of state to hold the planet's data
    // Initially its an empty array, but will later hold on object with the planets details
      const [planet, setPlanets] = useState([]);

      //useParams lets me grab the 'uid' from the URL
       const { uid } = useParams()
   
       // useEffect runs when the component loads for the first time (because of the empty dependency array [])
       useEffect(
           () => {
            //Making a fetch request to the API using the uid from the URL to get this planet's data
               fetch(`https://www.swapi.tech/api/planets/${uid}`)
                   .then(resp => resp.json()) // convert the response to JSN
                   .then(PlanetInfo => {
                       console.log(PlanetInfo.result.properties); // Log the planet properties to the console to inspect
                       setPlanets(PlanetInfo.result.properties); // Save the planet data into state
                   })
                   .catch(error => {
                    // If something goes wrong, show the error in the console
                       console.error("Error fetching PlanetInfo:", error);
                   })
           }, []) //Empty array mean the useEffect only runs once when component mounts
   
           // the return block defines what will show up on the screen
       return (
           <div>  
            {/* Bootstrap card layout to display planet details */}
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
               <div className="row g-0">
                {/* Image section currently is a placeholder image, not planet specific */}
                   <div className="col-md-4">
                       <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796" className="img-fluid rounded-start" alt="..." />
                   </div>
                   {/* Text content area this where planet info is displayed */}
                   <div className="col-md-8">
                       <div className="card-body">
                           <h5 className="card-title">{planet.name}</h5>
                           <p className="card-text">{planet.climate}</p>
                           <p className="card-text">{planet.created}</p>
                           <p className="card-text">{planet.diameter}</p>
                           <p className="card-text">{planet.gravity}</p>
                           <p className="card-text">{planet.orbital_period}</p>
                           <p className="card-text">{planet.population}</p>
                           <p className="card-text">{planet.rotation_period}</p>
                           <p className="card-text">{planet.surface_water}</p>
                           <p className="card-text">{planet.terrian}</p>
                           {/* Static note at the bottom of the card */}
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
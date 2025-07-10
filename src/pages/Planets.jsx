import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Planets = () => {
  
      const [planet, setPlanets] = useState([]);
       const { uid } = useParams()
   
       useEffect(
           () => {
               fetch(`https://www.swapi.tech/api/planets/${uid}`)
                   .then(resp => resp.json())
                   .then(PlanetInfo => {
                       console.log(PlanetInfo.result.properties);
                       setPlanets(PlanetInfo.result.properties);
                   })
                   .catch(error => {
                       console.error("Error fetching PlanetInfo:", error);
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
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Vehicles = () => {

    const [vehicles, setVehicles] = useState([]);
    const { uid } = useParams();

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
            .then(resp => resp.json())
            .then(VehicleInfo => {
                console.log(VehicleInfo.result.properties);
                setVehicles(VehicleInfo.result.properties);
            })
            .catch(error => {
                console.error("Error fetching VehicleInfo:", error);
            });
    }, [])

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
                           <h5 className="card-title">{vehicles.name}</h5>
                           <p className="card-title">{vehicles.created}</p>
                           <p className="card-title">{vehicles.consumables}</p>
                           <p className="card-title">{vehicles.cargo_capacity}</p>
                           <p className="card-title">{vehicles.passangers}</p>
                           <p className="card-title">{vehicles.max_atmosphering_speed}</p>
                           <p className="card-title">{vehicles.crew}</p>
                           <p className="card-title">{vehicles.length}</p>
                           <p className="card-title">{vehicles.model}</p>
                           <p className="card-title">{vehicles.cost_in_credits}</p>
                           <p className="card-title">{vehicles.manufacturer}</p>
                           <p className="card-title">{vehicles.vechicle_class}</p>
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
};

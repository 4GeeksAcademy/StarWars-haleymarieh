// Bringing in custom hook for global state, Peoplecard component, and React hooks (not used yet)
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
// Bringing in the components that will display the cards for people and planets
import { Peoplecard, Planetcard, StarWarsInfo, Vehiclescard } from "../components/bootstrapcards.jsx";
// Importing core React tools: useEffect (for side effects like fetching), useState (for state variables)
import React, { useEffect, useState } from "react";
// Bringing in styles
import "../index.css"
// This is the main component for the home page
export const Home = () => {
	// useState is creating local state variables to store fetched data
	// These start as empty arrays
	// const { store, dispatch } = useGlobalReducer();
	const [people, setPeople] = useState([]); // full data of each person will go here
	const [planets, setPlanets] = useState([]); // full data of each planet will go here
	const [vehicles, setVehicles] = useState([]);



	// useEffect runs code when this component is loaded for the first time
	useEffect(
		() => {
			// Fetching the inital list of people from the API
			fetch("https://www.swapi.tech/api/people")
				.then(resp => resp.json()) // turning the response into JSON
				.then(dataObj => {
					let shortChars = dataObj.results; // This gives me a list of epople with just name an uid
					console.log(shortChars); // Logs the short list to see it in the browser console

					//Now I Loop over each person and fetch their full details using their uid
					let promises = shortChars.map(shortChar => fetch(`https://www.swapi.tech/api/people/${shortChar.uid}`)
						.then(resp => resp.json())) // again turining the response into JSON
					// Wait until ALL person detail fetches are done, then store them in state 
					Promise.all(promises).then(results => setPeople(results))
				});
			// Doing the same as above for people but now for planets
			fetch("https://www.swapi.tech/api/planets")
				.then(resp => resp.json()) // turning the repsone into JSON
				.then(dataObj => {
					let shortPlanets = dataObj.results; // Get the list of planets with just name and uid
					console.log(shortPlanets); //Log to console to inspect 
					//Fetching full details for each planet
					let promises = shortPlanets.map(shortPlanets => fetch(`https://www.swapi.tech/api/planets/${shortPlanets.uid}`)
						.then(resp => resp.json())) //Turn response into JSON
					// Wait for all planet details, then update the state
					Promise.all(promises).then(results => setPlanets(results))
				});
//Here i am doing the same for people and planets but now for vehicles *THIS IS ADDITONAL WORK I AM ADDING*
				fetch("https://www.swapi.tech/api/vehicles")
				.then(resp => resp.json())
				.then(dataObj => {
					let shortVehicles = dataObj.results;
					console.log(shortVehicles);
					let promises = shortVehicles.map(shortVehicles =>fetch (`https://www.swapi.tech/api/vehicles/${shortVehicles.uid}`) 
				.then(resp => resp.json()))
				Promise.all(promises).then(results => setVehicles(results))
				});
		}, [] // the empty array [] means this effect will only run once when the component first mounts
	)
	// this is where i left off i am confused on where and how i should pass props in this, would i need to do it in the return like i did with my previous fetches?
	// useEffect ( 
	// 	() =>
	// 	fetch("https://www.swapi.tech/api/people/")
	// 	.then(resp => resp.json())
	// 	.then(StarWarsInfo => {
	// 		console.log(StarWarsInfo);
	// 	})
	// 	.catch(error =>{
	// 		console.error("Error fetching StarWarsInfo:", error);
	// 	})
	// )







	// // Function to fetch people data from the Star Wars API and update state
	// const getPeopleInfo = () => {
	// 	fetch('https://www.swapi.tech/api/people')
	// 		.then(response => {
	// 			if (!response.ok) throw new Error(response.statusText);
	// 			return response.json();
	// 		})
	// 		.then(data => {
	// 			setPeople(data.results);

	// 		})

	// 		.catch(error => console.error('Error fetching people info:', error));
	// };

	// const getExtraPeopleInfo = (uid) => {
	// 	fetch(`https://www.swapi.tech/api/people/${uid}`)
	// 		.then(response => {
	// 			if (!response.ok) throw new Error(response.statusText);
	// 			return response.json();
	// 		})
	// 		.then(data => {
	// 			setExtraPeople(data.results);
	// 		})
	// 		.catch(error => console.error('Error fetching  extra people info:', error));
	// };

	// const getPlanetInfo = () => {
	// 	fetch('https://www.swapi.tech/api/planets?page=1&limit=10')
	// 		.then(response => {
	// 			if (!response.ok) throw new Error(response.statusText);
	// 			return response.json();
	// 		})
	// 		.then(data => {
	// 			setPlanets(data.results);
	// 		})
	// 		.catch(error => console.error('Error fetching planet info:', error));
	// };

	// const getExtraPlanet = (uid) => {
	// 	fetch(`https://www.swapi.tech/api/planets/${uid}`)
	// 		.then(response => {
	// 			if (!response.ok) throw new Error(response.statusText);
	// 			return response.json();
	// 		})
	// 		.then(data => {
	// 			setExtraPlanet(data.results);
	// 		})
	// 		.catch(error => console.error('Error fetching  extra planet info:', error));
	// };


	// The return block is where I define what will be displayed on the page
	return (
		<div>
			{/*first section: displaying character cards */}
			<div className="scroll-container d-flex text-center mt-5">
				{/* Loop through the people array and show a Peoplecard for each person */}
				{people.map(
					(person) => <Peoplecard key={person.result.uid} id={person.result.uid} character={person.result.properties} />
				)}
			</div>

			{/* Second section: displaying planet cards */}
			<div className="scroll-container d-flex text-center mt-5">
				{/* Loops through the planets array and show a Planetcard for each planet */}
				{planets.map(
					(planet) => <Planetcard key={planet.result.uid} id={planet.result.uid} planet={planet.result.properties} />
				
				)}
			</div>
			
			<div className="scroll-container d-flex text-center mt-5">
				{/* Loops through the planets array and show a Vehiclecard for each vehicle THIS IS ADDITIONAL */}
				{vehicles.map(
					(vehicles) => <Vehiclescard key={vehicles.result.uid} id={vehicles.result.uid} vehicles={vehicles.result.properties} />
				
				)}
			</div>
		</div>
	);
};
// Importing necessary tools: custom hook for global state, Peoplecard component, and React hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Peoplecard, Planetcard, StarWarsInfo } from "../components/bootstrapcards.jsx";
import React, { useEffect, useState } from "react";
import "../index.css"
// Defining the Home component to display Star Wars characters
export const Home = () => {
	// Setting up global state (not used yet) and local state for people and planets data
	// const { store, dispatch } = useGlobalReducer();
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [extraPeople, setExtraPeople] = useState([]);
	const [extraPlanet, setExtraPlanet] = useState([]);

	// Fetching people data from the API when the component loads


	useEffect(
		() => {
			fetch("https://www.swapi.tech/api/people")
				.then(resp => resp.json())
				.then(dataObji => {
					let shortChars = dataObji.results;
					console.log(shortChars);
					let promises = shortChars.map(shortChar => fetch(`https://www.swapi.tech/api/people/${shortChar.uid}`).then(resp => resp.json()))

					Promise.all(promises).then(results => setPeople(results))
				});

			fetch("https://www.swapi.tech/api/planets")
				.then(resp => resp.json())
				.then(dataObji => {
					let shortPlanets = dataObji.results;
					console.log(shortPlanets);
					let promises = shortPlanets.map(shortPlanets => fetch(`https://www.swapi.tech/api/planets/${shortPlanets.uid}`).then(resp => resp.json()))

					Promise.all(promises).then(results => setPlanets(results))
				});
		}, []
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


	// Rendering a list of Peoplecard components for each character
	return (
		<div>
			<div className="scroll-container d-flex text-center mt-5">
				{people.map(
					(person) => <Peoplecard key={person.result.uid} id={person.result.uid} character={person.result.properties} />
				)}
			</div>

			<div className="scroll-container d-flex text-center mt-5">
				{planets.map(
					(planet) => <Planetcard key={planet.result.uid} id={planet.result.uid} planet={planet.result.properties} />
				)}
			</div>
		</div>
	);
};
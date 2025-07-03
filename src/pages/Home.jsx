import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Peoplecard } from "../components/bootstrapcards.jsx";
import React, {useEffect, useState} from "react";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

useEffect(() => {
		getpeopleinfo()
	}, []);

  const getpeopleinfo = () => {
	fetch('https://www.swapi.tech/api/people')
		.then(response => {
				if (!response.ok) throw new Error(response.statusText);
				return response.json();
			})
		.then(data => {
				setPeople (data.results)
			})
		.catch(error => console.error('Error fetching people info:', error));
		}

		

	return (
		<div className="text-center mt-5">
			{people.map(
				(person) => <Peoplecard character={person}/>
			)}	
		</div>
	);
}; 
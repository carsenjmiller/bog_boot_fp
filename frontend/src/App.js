import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./Components/About"
// import Nav from "./Components/Nav";
// import PetProfileList from "./Components/PetProfileList";
// import './Components/PetProfileList.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AdoptAPet from './Components/AdoptAPet';

const props = [
	{
		_id: 'dog',
		pets: [
			{
				name: 'Rocky',
				breed: 'American pit bull cross',
				status: 'Neutered and vaccinated',
				gender: 'Female',
				yearsOld: 7,
				adopted: false,
			},
			{
				name: 'Juju',
				breed: 'American staff cross',
				status: 'Vaccindated, not neutered',
				gender: 'Male',
				yearsOld: 7,
				adopted: true,
			},
			{
				name: 'Rocky',
				breed: 'American pit bull cross',
				status: 'Neutered and vaccinated',
				gender: 'Female',
				yearsOld: 7,
				adopted: false,
			},
			{
				name: 'Juju',
				breed: 'American staff cross',
				status: 'Vaccindated, not neutered',
				gender: 'Male',
				yearsOld: 7,
				adopted: true,
			}
		]
	},
	{
		_id: 'cat',
		pets: [
			{
				name: 'Terry',
				breed: 'Domestic medium hair cross',
				status: 'Neutered, not vaccinated',
				gender: 'Male',
				yearsOld: 2,
				adopted: false,
			},
			{
				name: 'Chonker',
				breed: 'Main coone',
				status: 'Status unknown',
				gender: 'Female',
				yearsOld: 5,
				adopted: true,
			},
			{
				name: 'Terry',
				breed: 'Domestic medium hair cross',
				status: 'Neutered, not vaccinated',
				gender: 'Male',
				yearsOld: 2,
				adopted: false,
			},
			{
				name: 'Chonker',
				breed: 'Main coone',
				status: 'Status unknown',
				gender: 'Female',
				yearsOld: 5,
				adopted: true,
			}	
		]
	}
]

// console.log(props[0]);

function App() {
  return (
	  <Router>
		{/* <div >
		<Nav />
		<main>
			<PetProfileList contents={props[0]} />
			<PetProfileList contents={props[1]} /> 
		</main>
		</div>        */}
		<AdoptAPet />
		<Switch>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/adoptapet">
				<AdoptAPet />
			</Route>
		</Switch>
	</Router>
  );
}

export default App;

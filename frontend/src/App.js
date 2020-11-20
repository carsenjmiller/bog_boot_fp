import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav";
import PetProfileList from "./Components/PetProfileList";

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
			}
		]
	}
]

// console.log(props[0]);

function App() {
  return (
    <div >
      <Nav />
      <PetProfileList contents={props[0]} />
      <PetProfileList contents={props[1]} /> 
    </div>
  );
}

export default App;

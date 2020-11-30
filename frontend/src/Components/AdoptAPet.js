import React from 'react';
import './style.css';
import PetProfileList from './PetProfileList'
// import FakeData from './FakeData'

const AdoptAPet = (props) => {
	React.useEffect(() => {
		var setCurrPets2 = props.setCurrentPets;
		fetch('http://localhost:3001/findDocuments')
		  .then(response => response.json())
		  .then(data => setCurrPets2(data))
		  .catch(error => {
			console.error(error)
		  })
	  }, [])
    return (
		<main className= "petCards">
			<PetProfileList species={props.content[0]} />
			<PetProfileList species={props.content[1]} /> 
		</main>

    )
}

export default AdoptAPet;
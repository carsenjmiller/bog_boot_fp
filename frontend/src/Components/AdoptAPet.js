import React from 'react';
import './style.css';
import PetProfileList from './PetProfileList'
// import FakeData from './FakeData'

const AdoptAPet = (props) => {
    return (
		<main class= "petCards">
			<PetProfileList species={props.content[0]} />
			<PetProfileList species={props.content[1]} /> 
		</main>

    )
}

export default AdoptAPet;
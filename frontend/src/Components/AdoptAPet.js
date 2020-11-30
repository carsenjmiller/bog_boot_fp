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
	const dogs = (props.content[0]._id === "cat") ? (props.content[1]):(props.content[0]);
    const cats = (props.content[0]._id === "cat") ? (props.content[0]):(props.content[1]);
	return (
		<main className="petCards">
			<PetProfileList species={dogs} />
			<PetProfileList species={cats} />
		</main>

	)
}

export default AdoptAPet;
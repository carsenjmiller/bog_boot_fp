import React from 'react';
import './style.css';
// import FakeData from './FakeData'
import PetProfile from './PetProfile'

const PetProfileList = (type) => {
    const Pets = type.species.pets.map((pet, idx) =>
        <PetProfile
            key={idx + pet.name}
            name={pet.name}
            breed={pet.breed}
            status={pet.status}
            gender={pet.gender}
            yearsOld={pet.yearsOld}
            adopted={pet.adopted}
            type={type.species._id}
        />
    )
    // console.log(type.contents._id);
    return (
        <div className="petList">

            <h1>{(type.species._id === 'dog') ? ("Dogs and Puppies") : ("Cats and Kittens")}</h1>
            <div id="Pets">
                {Pets}
            </div>
        </div>
    )
}
export default PetProfileList;
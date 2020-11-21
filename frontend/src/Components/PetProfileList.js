import React from "react";
import PetProfileCard from "./PetProfileCard";
import './PetProfileList.css';

const PetProfileList = (type) => {
    const Pets = type.contents.pets.map((pet, idx) =>
        <PetProfileCard
            key={idx + pet.name}
            name={pet.name}
            breed={pet.breed}
            status={pet.status}
            gender={pet.gender}
            yearsOld={pet.yearsOld}
            adopted={pet.adopted}
        />
    )
    // console.log(type.contents._id);
    return (
        <div className="petList">

            <h1>{(type.contents._id == 'dog') ? ("Dogs and Puppies") : ("Cats and Kittens")}</h1>
            <div id="Pets">
                {Pets}
            </div>
        </div>
    )
}
export default PetProfileList;
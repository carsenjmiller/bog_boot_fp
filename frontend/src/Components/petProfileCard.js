import React from "react";
import './PetProfileList.css';

const PetProfileCard = props => {
    return (
      <section className="profile" display={props.adopted ? ("none") : ("inline-block")}>
        <h3>{props.name}</h3>
        <p>{props.breed}</p>
        <p>{props.status}</p>
        <p>{props.gender}, {props.age} years old</p>
        <button>View more details</button>
      </section>
    );
  };
  
  export default PetProfileCard;
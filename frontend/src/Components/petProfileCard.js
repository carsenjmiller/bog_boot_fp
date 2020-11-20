import React from "react";

const petProfileCard = props => {
    return (
      <section className="profile">
        <h3>{props.name}</h3>
        <p>{props.breed}</p>
        <p>{props.status}</p>
        <p>{props.gender}, {props.age} years old</p>
        <button>View more details</button>
      </section>
    );
  };
  
  export default petProfileCard;
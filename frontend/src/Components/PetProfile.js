import React from 'react';
import './style.css';
import { 
    Link
  } from 'react-router-dom';

const PetProfile = (pet) => {
    const status = pet.adopted
    return (
        <section className={status ? "profileHide":"profile"}>
      <img src={pet.type === "dog" ? "https://picsum.photos/350/200":"http://placekitten.com/350/200"} id="profileImage" alt={"Picture of " + pet.name}></img>
      <div>
        <div>
          <h2>{pet.name}</h2>
          <p>{pet.breed}</p>
          <p>{pet.status}</p>
          <p>{pet.gender}, {pet.age} years old</p>

        </div>
        <Link to={"/" + pet.name + '-' + pet.type} style={{ textDecoration: 'none' }}>
            <button >View more details</button>
        </Link>
      </div>
    </section>
    )
}
 
export default PetProfile;
import React from 'react';
import './style.css';
import {
  Link
} from 'react-router-dom';
// get our fontawesome imports
import { faDog, faSyringe, faInfoCircle, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PetProfile = (pet) => {
  const status = pet.adopted
  return (
    <section className={status ? "profileHide" : "profile"}>
      <img src={pet.type === "dog" ? "https://picsum.photos/350/200" : "http://placekitten.com/350/200"} id="profileImage" alt={"Picture of " + pet.name}></img>
      <div>
        <div>
          
          <h2>{pet.name}</h2>
          <p className="desc"><FontAwesomeIcon icon={faDog} /> {pet.breed}</p>
          <p className="desc"><FontAwesomeIcon icon={faSyringe} /> {pet.status}</p>
          <p className="desc"><FontAwesomeIcon icon={faInfoCircle} /> {pet.gender}, {pet.yearsOld} years old</p>
          <Link id="moreDetails" to={"/" + pet.name + '-' + pet.type} style={{ textDecoration: 'none' }}>
          <button >View more details   <FontAwesomeIcon icon={faArrowDown} /></button>
        </Link>

        </div>
        {/* <Link id="moreDetails" to={"/" + pet.name + '-' + pet.type} style={{ textDecoration: 'none' }}>
          <button >View more details   <FontAwesomeIcon icon={faArrowDown} /></button>
        </Link> */}
      </div>
    </section>
  )
}

export default PetProfile;
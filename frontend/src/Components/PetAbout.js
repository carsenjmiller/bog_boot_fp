import React from 'react';
import './style.css';
import AdoptMe from './AdoptMe'
import { faDog, faSyringe, faInfoCircle, faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PetAbout = (petInfo) => {
    const [adoptMeBTN, setAdoptMeBTN] = React.useState("ADOPT ME!")
    return (
        <div className="about">
            <div className="bodyPet">
                <h1>{petInfo.name}</h1>
                <div className="petInfo">
                    <img src={petInfo.imgSrc} id="profileImage" alt={"Picture of " + petInfo.name}></img>
                    <div className="petInfoWords">
                        <p><FontAwesomeIcon icon={( petInfo.type === 'dog') ? (faDog) : (faCat)} /> {petInfo.breed}</p>
                        <p><FontAwesomeIcon icon={faSyringe} /> {petInfo.status}</p>
                        <p><FontAwesomeIcon icon={faInfoCircle} /> {petInfo.gender}, {petInfo.yearsOld} years old</p>
                    </div>
                </div>
                <div>
                    {/* <h1>Ut proverbia non nulla veriora sint quam vestra dogmata.</h1> */}

                    <p>{petInfo.name} is a sweet, delicate blended kitty, part Lynx Point Siamese and part domestic short hair. True to the Siamese side of her breed, she is very vocal.
                        Her coast has lots of interesting colors and she had haunting clue ryes. When she first coame to QAS, she was nervous and frightnened because, at some point
                        in her 2 years, she had become a stray.
                    </p>

                    <p>It was quickly dscovered that her back left leg had been broken in two places and was nto healing well. As a result, that leg had to be amputated. She has made
                        a full recovery in a loving foster home. Her foster mom says she has become more active. She greets her in the kitchen when she gets home, She us moving around
                        the house easily. She can go up and down the stairs, jump on the couch, and jump on the bed. She also likes to explore and seems to have no fear of the house.
                    </p>

                    <p>She was introduced to a dog and did not seem scared at all. THey actually went nose to nose for a quick sniff. </p>

                    <p>She loves to be patted aggresively. When shs rubs against you to be patted it is really more like she slams into you. She will climb on your lap, and occasionally
                        on your chest to be petted. She still startles simetimes, when approached, but will usually come back immediately for petting.
                    </p>

                    <p>She appears to be a cat that needs a  lot of attention, It would be especially good for her if someone with Siamese breed experience
                        were to adopt her, someone who understands the specia; personality traits of a Siamese cat. The breed is highly intelligent but can have a mind of their own. They are
                        affecionate and most of them love to play. She has not, so far, been interested in toys but this may come now that she is healthy.
                    </p> 
                </div>
                <AdoptMe name={petInfo.name} petInfo={petInfo} currentPets={petInfo.currentPets} updateAdoption={petInfo.updateAdoption} adoptMeBTN={adoptMeBTN} setAdoptMeBTN={setAdoptMeBTN}/>
            </div>
        </div>
    )
}

export default PetAbout;
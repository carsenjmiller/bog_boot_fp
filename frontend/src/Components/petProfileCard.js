import React from "react";
import './PetProfileList.css';

const PetProfileCard = props => {
  // const [myImage, setMyImage] = React.useState("#");
  
  // const setMyImage2 = (newImage) => {
  //   setMyImage(newImage);
  //   console.log(myImage);
  // };

  // React.useEffect(() => {
  //   fetch("https://picsum.photos/350/200")
  //     .then(response => response.json())
  //     .then(data => setMyImage2(data))
  //     .catch(error => console.error(error))
  // },[])

  return (
    <section className="profile" display={props.adopted ? ("none") : ("inline-block")}>
      <img src="https://picsum.photos/350/200" id="profileImage"></img>
      <div>
        <div>
          <h3>{props.name}</h3>
          <p>{props.breed}</p>
          <p>{props.status}</p>
          <p>{props.gender}, {props.age} years old</p>

        </div>
        <button >View more details</button>
      </div>
    </section>
  );
};

export default PetProfileCard;
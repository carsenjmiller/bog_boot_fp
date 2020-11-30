import React from 'react';
import './style.css';
import { useHistory } from "react-router-dom";

const AdoptMe = (props) => {
    let history = useHistory();

    function handleClick() {
        // history.push("/");
        // props.updateAdoption(props.petInfo);
        // <UpdatePets name={props.name}/>
        var url = 'http://localhost:3001/' + props.name;
        console.log(url);
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({
            completed: true
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
            })
              .then(response => response.json())
              .then(data => console.log(data))
              .catch(error => {
                console.error(error)
              })
        props.setAdoptMeBTN("Pending Approval")
        setTimeout(() => {
            history.push("/")
        }, 1000);
        
        
    }

    return (
    <button type="button" id="adoptButton" onClick={handleClick}>{props.adoptMeBTN}</button>
    )
}

// const UpdatePets = (name) => {
//     /// fetch stuff in here
//             var url = 'http://localhost:3001/' + name;
//             console.log(url);
//             fetch(url)
//               .then(response => response.json())
//               .then(data => console.log(data))
//               .catch(error => {
//                 console.error(error)
//               })
//     return;
// }

export default AdoptMe;
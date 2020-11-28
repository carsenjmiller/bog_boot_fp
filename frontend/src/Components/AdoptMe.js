import React from 'react';
import './style.css';
import { useHistory } from "react-router-dom";

const AdoptMe = (props) => {
    let history = useHistory();

    function handleClick() {
        // history.push("/");
        props.updateAdoption(props.petInfo);
        props.setAdoptMeBTN("Pending Approval")
        setTimeout(() => {
            history.push("/")
        }, 1000);
        
        
    }

    return (
    <button type="button" id="adoptButton" onClick={handleClick}>{props.adoptMeBTN}</button>
    )
}

export default AdoptMe;
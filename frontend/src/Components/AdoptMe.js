import React from 'react';
import './style.css';
import { useHistory } from "react-router-dom";

const AdoptMe = (props) => {
    let history = useHistory();

    function handleClick() {
        history.push("/");
        props.updateAdoption(props.petInfo);
    }

    return (
        <button type="button" id="adoptButton" onClick={handleClick}>ADOPT ME!</button>
    )
}

export default AdoptMe;
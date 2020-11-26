import logo from './logo.svg';
import React from 'react'
import './App.css';
import Nav from './Components/Nav'
import About from './Components/About'
import AdoptAPet from './Components/AdoptAPet'
import FakeData from './Components/FakeData'
import PetAbout from './Components/PetAbout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect
} from "react-router-dom";

// const [currentPets, setCurrentPets] = React.useState(FakeData)
// const updateAdoption = (props) => {
//   currentPets[props.typeIndex].pets[props.petIndex].adopted = true
//   setCurrentPets(currentPets)
// }
// import { useHistory } from "react-router-dom";



  function App() {
    const [currentPets, setCurrentPets] = React.useState(FakeData)
    const updateAdoption = (props) => {
 
      currentPets[props.typeIndex].pets[props.petIndex].adopted = true
      setCurrentPets(currentPets)
    }
    return (
      <Router>
        <div className="main">
          <Nav />
          <div className="topMargin">
            <Switch>
              <Route exact path="/">
                <Redirect to="/adoptapet" />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/adoptapet">
                <AdoptAPet content={currentPets} />
              </Route>
              <Route path="/:id" children={<Child currentPets={currentPets} updateAdoption={updateAdoption} />} />
            </Switch>
          </div>
        </div>
      </Router>

    )
  }

  function Child(props) {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    console.log(id);
    let ids = id.split("-");
    console.log(ids[0]);
    console.log(ids[1]);
    let type = 0;
    let pet = 0;
    while (props.currentPets[type]._id !== ids[1]) {
      type++
    }
    while (props.currentPets[type].pets[pet].name !== ids[0]) {
      pet++
    }
    // const desc = ""

    // React.useEffect(() => {
    //   fetch('loripsum.net/api')
    //     .then(response => response.json())
    //     .then(data => desc)
    // }, [])

    return (
      <PetAbout
        // type={ids[1]}
        // name={ids[0]}
        // breed={"American pit bull cross"}
        // status={"Neutered and vaccinated"}
        // gender={"Female"}
        // yearsOld={7}
        // adopted={false}
        typeIndex={type}
        petIndex={pet}
        type={props.currentPets[type]._id}
        name={props.currentPets[type].pets[pet].name}
        breed={props.currentPets[type].pets[pet].breed}
        status={props.currentPets[type].pets[pet].status}
        gender={props.currentPets[type].pets[pet].gender}
        yearsOld={props.currentPets[type].pets[pet].yearsOld}
        adopted={props.currentPets[type].pets[pet].adopted}
        updateAdoption={props.updateAdoption}
        petInfo={props.currentPets}
      />
    );
  }

  export default App;

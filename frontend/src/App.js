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

function App() {
  return (
    <Router>
      <div className="main">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Redirect to="/adoptapet" />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/adoptapet">
            <AdoptAPet content={FakeData} />
          </Route>
          <Route path="/:id" children={<Child />} />
        </Switch>

      </div>
    </Router>

  )
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  console.log(id);
  let ids = id.split("-");
  console.log(ids[0]);
  console.log(ids[1]);
  // const desc = ""

  // React.useEffect(() => {
  //   fetch('loripsum.net/api')
  //     .then(response => response.json())
  //     .then(data => desc)
  // }, [])

  return (
    <PetAbout
      type={ids[1]}
      name={ids[0]}
      breed={"American pit bull cross"}
      status={"Neutered and vaccinated"}
      gender={"Female"}
      yearsOld={7}
      adopted={false}
    // type={type.species._id}
    // breed={pet.breed}
    // status={pet.status}
    // gender={pet.gender}
    // yearsOld={pet.yearsOld}
    // adopted={pet.adopted}
    // type={type.species._id}
    />
  );
}

export default App;

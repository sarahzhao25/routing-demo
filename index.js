import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, HashRouter } from 'react-router-dom';

// route path to some component

const HarryLand = () => {
  return <div>Expelliarmus!</div>
}

const HamiltonLand = (props) => {
  console.log('these are my hamiltonprops', props);
  return <div>I am not throwing away my shot, {props.enemy}!</div>
}

const Home = () => {
  return <div>I am on the home page!</div>
}

const RenderHamilton = (routeProps) => {
  return <HamiltonLand {...routeProps} />
}

const Main = () => {
  return (
    <HashRouter>
      <div>
        <Link to="/harry">Click for Harry!</Link>
        <Link to="/hamilton">Click for Hamilton!</Link>
        <Route path="/harry" component={HarryLand} />
        <Route path="/hamilton" render={(routeProps) => <HamiltonLand {...routeProps} enemy={'Aaron Burr'}/>} />
        <Route exact path="/" component={Home} />
      </div>
    </HashRouter>
  )
}

ReactDOM.render(<Main />, document.getElementById('app'));

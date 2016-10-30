import React from 'react';

import { createContainer } from 'meteor/react-meteor-data';


const App = (props) => (
  <div>
    <section id="menu">menu</section>
    <section id="main">{props.main}</section>
  </div>
);

export default AppContainer = createContainer(props => {
  return {
    user: 'okk'//Meteor.user(),
  };
}, App);
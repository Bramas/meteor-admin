import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from './components/AppContainer.js';

import PageContainer from './components/PageContainer.js';

import AutoForm from './components/AutoForm.js';


FlowRouter.route('/lists/:_id', {
  name: 'Lists.show',
  action(p) {
  	console.log(p);
    mount(AppContainer, {
      main: <AutoForm />,
    });
  },
});
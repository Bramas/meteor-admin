import React from 'react';

import { createContainer } from 'meteor/react-meteor-data';


//import Griddle from 'griddle-react';

const PageContainerChild =  ({content}) => (<p>Hello, {content}</p>);

export default PageContainer = createContainer({
	content:'lol'
}, PageContainer);
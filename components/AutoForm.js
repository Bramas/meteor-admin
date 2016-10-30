import React from 'react';
import ReactAutoForm from 'meteor-react-autoform';
import PostSchema from '../collections/posts/schema';
function deb(a) {
	console.log(a);
}

export default AutoForm = () => (
           <div>
           <h1>Contact Us</h1>
           <ReactAutoForm
               errors={this.props.errors}
               errorsStyle={{
                  container: {
                      background: 'green'
                  },
                  h3: {
                      background: 'red'
                  },
                  ul: {
                      background: 'purple'
                  },
                  li: {
                      background: 'yellow'
                  }
               }}
               muiTheme={true}
               onSubmit={deb}
               schema={PostSchema}
               type="insert"
               formStyle={{
                   background: 'blue'
               }}
           />
           </div>
       );


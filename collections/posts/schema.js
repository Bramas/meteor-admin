  const schema = {
    name: {
     type: String,
     materialForm: {
       floatingLabelText: 'Your name',
       hintText: 'Sarah Smith...'
     }
    },
    description: {
     type: String,
     min: 10,
     max: 200,
     materialForm: {
       floatingLabelText: 'Describe your problem',
       rows: 1,
       rowsMax: 10,
       multiLine: true,
       hintText: 'I require a password reset...'
     }
    },
    reoccurringProblem: {
      type: Boolean,
      defaultValue: true,
      label: 'Have you had the problem before?',
      materialForm: {
        switcher: 'Checkbox'
      }
    }
  };

  export default schema;
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      // save the data from the model
      const contact = this.store.createRecord('contact', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email: this.get('email')
      });

      // send the data to FIREBASE
      contact.save().then(() => {
        // Reset the form inputs
        this.set('firstName', '');
        this.set('lastName', '');
        this.set('email', '');
        this.transitionToRoute('contacts');
      });
    },
    cancel() {
      // Reset the form inputs
      this.set('firstName', '');
      this.set('lastName', '');
      this.set('email', '');
      this.transitionToRoute('contacts');
    }
  }
});

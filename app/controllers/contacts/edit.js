import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save(contact) {

      // when the record is found
      this.store.findRecord('contact', this.get('model.id')).then((thisContact) => {

        // ...after the record has loaded
        thisContact.set('firstName', this.get('model.firstName'));
        thisContact.save().then(() => {
          // Reset the form inputs and close form
          this.setProperties({firstName: '', lastName: ''});
          this.transitionToRoute('contacts');
        });
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

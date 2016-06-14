import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    edit(contact) {
      this.store.findRecord('contact', contact.id).then((response) => {
        this.set('firstName', response.firstName);
      });
    },
    delete(contact) {
      this.store.findRecord('contact', contact.id).then((response) => {
        response.destroyRecord();
      });
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete(contact) {
      this.store.findRecord('contact', contact.id).then((response) => {
        response.destroyRecord();
      });
    }
  }
});

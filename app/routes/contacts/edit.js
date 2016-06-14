import Ember from 'ember';

export default Ember.Route.extend({
  model(contact) {
    return this.store.findRecord('contact', contact.id);
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('message', {
      orderBy: 'match',
      equalTo: this.modelFor('matches.show').get('id')
    });
  }
});

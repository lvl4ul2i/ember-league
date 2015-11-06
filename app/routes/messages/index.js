import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('message', {
      orderBy: 'match',
      equalTo: this.paramsFor('matches.show').match_id
    });
  }
});

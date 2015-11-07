import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  hasTeam1: computed.notEmpty('model.team1Name'),
  hasTeam2: computed.notEmpty('model.team2Name'),
  isValid: computed.and('hasTeam1', 'hasTeam2'),

  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then(match => {
          this.transitionToRoute('matches.show', match);
        });
      } else {
        this.set('errorMessage', 'Yoy have to fill all the fields');
      }
      return false;
    },
    cancel() {
      return true;
    }
  }
});

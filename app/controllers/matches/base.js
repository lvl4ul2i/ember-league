import Ember from 'ember';

export default Ember.Controller.extend({
  
  hasTeam1:      Ember.computed.notEmpty('model.team1Name'),
  hasTeam2:  Ember.computed.notEmpty('model.team2Name'),
  isValid:       Ember.computed.and(
    'hasTeam1',
    'hasTeam2'
  ),
  actions: {
    save(){
      if(this.get('isValid')){
        var _this = this;
        this.get('model').save().then(function(match){
          _this.transitionToRoute('matches.show', match);
        });
      }else{
        this.set('errorMessage','Yoy have to fill all the fields');
      }
      return false;
    },
    cancel(){
      return true;
    }
  }
});

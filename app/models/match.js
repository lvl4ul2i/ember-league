import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  messages: DS.hasMany('message', {
    async: true
  }),
  team1Name: DS.attr('string'),
  team2Name: DS.attr('string'),
  team1Score: DS.attr('number',{ defaultValue: 0 }),
  team2Score: DS.attr('number',{ defaultValue: 0 }),
  minutes: DS.attr('number',{ defaultValue: 0 }),
  date: DS.attr('date', {
    defaultValue: function() {
      return (new Date());
    }
  }),
  teams: Ember.computed('team1Name','team2Name',{
    get(){
      return this.get('team1Name') + ' vs ' + this.get('team2Name');
    },
  }),
  score: Ember.computed('team1Score','team2Score',{
    get(){
      return this.get('team1Score') + ' - ' + this.get('team2Score');
    },
  })
});

import DS from 'ember-data';
import Ember from 'ember';

const { attr, hasMany } = DS;
const { computed } = Ember;

export default DS.Model.extend({
  messages: hasMany('message', {
    async: true
  }),
  team1Name: attr('string'),
  team2Name: attr('string'),
  team1Score: attr('number', {
    defaultValue: 0
  }),
  team2Score: attr('number', {
    defaultValue: 0
  }),
  minutes: attr('number', {
    defaultValue: 0
  }),
  date: attr('date', {
    defaultValue: function() {
      return (new Date());
    }
  }),
  teams: computed('team1Name', 'team2Name', {
    get() {
      return `${this.get('team1Name')} vs ${this.get('team2Name')}`;
    }
  }),
  score: computed('team1Score', 'team2Score', {
    get() {
      return `${this.get('team1Score')} - ${this.get('team2Score')}`;
    }
  })
});

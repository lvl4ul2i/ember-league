import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  match: belongsTo('match'),
  message: attr('string'),
  timestamp: attr('number')
});

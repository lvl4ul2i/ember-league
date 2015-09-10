import DS from 'ember-data';

export default DS.Model.extend({
  match: DS.belongsTo('match', {async: true}),
  message: DS.attr('string'),
  timestamp: DS.attr('number')  
});

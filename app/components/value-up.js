import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  type: 'button',
  classNames: ['btn btn-danger btn-xs'],

  actions: {
    valueUp(field) {
      var model = this.get('model');
      model.incrementProperty(field);
      model.save();
    }
  }
});

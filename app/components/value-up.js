import Ember from 'ember';

export default Ember.Component.extend({
  tagName : "button",
  type : "button",
  classNames: ['btn btn-danger btn-xs'],
    actions:{
      valueUp : function (field) {
        var model = this.get('model');
        var value = model.get(field) + 1;
        model.set(field, value);
        model.save();
      }
    }

});

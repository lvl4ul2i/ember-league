import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('matches', function() {
    this.route('new');

    this.route('show', {
      path: ':match_id'
    }, function () {
      this.route('messages',{resetNamespace: true}, function () {

      });
    });

    this.route('admin', {
      path: ':match_id/admin'
    });
  });

});

export default Router;

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('trails', {path: ':state'}, function() {
    this.route('trail', {path: ':trail_id'}, function() {
      this.route('activities');
      this.route('animals');
      this.route('plants');
      this.route('birds');
    });
  });
});

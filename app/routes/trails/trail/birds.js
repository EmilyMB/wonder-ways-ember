import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('bird', {trail_id: params.trail_id});
  }
});

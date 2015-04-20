import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    stateSelected: function(state) {
      this.set('selectedState', state);
      this.transitionTo('trails.index', state);
    }
  }
});

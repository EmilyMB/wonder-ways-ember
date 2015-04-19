import DS from 'ember-data';
import WonderWaysENV from './../config/environment';

export default DS.ActiveModelAdapter.extend({
  namespace: WonderWaysENV.API_NAMESPACE,
  coalesceFindRequests: true
});

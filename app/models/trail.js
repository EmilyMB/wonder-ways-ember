import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.attr('string'),
  lat: DS.attr('number'),
  lng: DS.attr('number'),
  directions: DS.attr('string'),
  description: DS.attr('string'),
  length: DS.attr('string')
});

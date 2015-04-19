import DS from 'ember-data';

export default DS.Model.extend({
  clip_url: DS.attr('string'),
  scientific_name: DS.attr('string'),
  trail: DS.belongsTo('trail'),
  photo_url: DS.attr('string')
});

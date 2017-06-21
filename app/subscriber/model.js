import DS from 'ember-data';

export default DS.Model.extend({
  useremail: DS.attr('string'),
  userinterest: DS.attr('string'),
  userlocation: DS.attr('string'),
  username: DS.attr('string'),
  userphone: DS.attr()
});

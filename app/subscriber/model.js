import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  emails:DS.hasMany('email', { async: true }),
  userphone: DS.attr(),
  userinterest: DS.attr(),
  userlocation: DS.attr()
});

import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  useremail: DS.hasMany('company', { async: true }),
  userphone: DS.attr(),
  userinterest: DS.attr(),
  userlocation: DS.attr()
});

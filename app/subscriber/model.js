import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  companies: DS.belongsTo('company', { async: true }),
  userphone: DS.attr(),
  userinterest: DS.attr(),
  userlocation: DS.attr()
});

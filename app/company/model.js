import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr(),
  location:DS.attr(),
  details:DS.attr(),
  company: DS.belongsTo('company', { inverse: null }),
  senderemail:DS.attr(),
  phone:DS.attr(),
  category:DS.attr()
});



import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr(),
  location:DS.attr(),
  details:DS.attr(),
  subscribers:DS.hasMany('subscriber', { async: true }),
  senderemail:DS.attr(),
  phone:DS.attr(),
  category:DS.attr()
});



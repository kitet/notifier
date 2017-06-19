import Ember from 'ember';

var companys = [{
  id: 1,
  name: "Nation-media",
  details: "News broadcasting and publishing house",
  location: "Nairobi",
  email: "nationmedia@yahoo.com",
  senderemail: "nationmediakenya@yahoo.com",
  phone: 6888993,
  category: "news"
}, {
  id: 2,
  name: "citizen-media",
  details: "News broadcasting and publishing house",
  location: "Nairobi",
  email: "citizenmedia@yahoo.com",
  senderemail: "citizenmediakenya@yahoo.com",
  phone: 8374763,
  category: "sports"
}];
export default Ember.Route.extend({
  model() {
    return companys;
  }
});

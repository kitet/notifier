import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return this.store.findAll('company');
  },
  actions:{
    saveCompany(params){
      var newCompany = this.store.createRecord("company", params);
      newCompany.save().then(function(){
        console.log("success");
      });
    }
  }
});

import Ember from 'ember';
export default Ember.Route.extend({
    firebaseApp: Ember.inject.service(),
    model() {
        return this.store.findAll('company');
    },
    actions: {
        saveCompany(params) {
            var self=this;
            const auth = this.get('firebaseApp').auth();
            var newCompany = this.store.createRecord("company", params);
            newCompany.save().then(function() {
                auth.createUserWithEmailAndPassword(params.email, params.password).then(function() {
                    self.get('session').open('firebase', {
                      provider: provider,
                      email: params.email,
                      password: params.password
                    }).then(function(){
                      this.transitionTo('company-profile');
                    }).catch(function(error){
                      alert('Problem creating company profile. Try Again');
                    });
                });
                //console.log("company added");
            });
            //this.transitionTo('company-profile');
        },
        saveSubscriber(params) {
            const auth = this.get('firebaseApp').auth();
            var newSubscriber = this.store.createRecord("subscriber", params);
            newSubscriber.save().then(function() {
                auth.createUserWithEmailAndPassword(params.useremail, params.password).then(function() {
                    self.get('session').open('firebase', {
                      provider: provider,
                      email: params.email,
                      password: params.password
                    }).then(function(){
                      this.transitionTo('subscriber-profile');
                    }).catch(function(error){
                      //alert('Problem creating company profile. Try Again');
                    });
                });
            });
        },
        subscribe(company) {
            var emailinsession = this.get('session.currentUser.email');
            this.store.query('subscriber', {
                orderBy: 'useremail',
                equalTo: emailinsession
            }).then(function(userx) {
                userx.forEach(function(user) {
                    company.get('subscribers').addObject(user);
                    company.save().then(() => {
                        user.get('companies').addObject(company);
                        user.save().then(function() {
                            alert('successfully subscribed to company')
                        });
                    }).catch((error) => {
                        //console.log(error);
                    });
                });

            });
        }
    }
});
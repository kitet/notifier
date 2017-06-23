import Ember from 'ember';

export default Ember.Route.extend({
    checkerLoggedUser: Ember.inject.service('signeduser-check'),
    actions: {
        signInCompany(company) {
            var self = this;
            this.get('checkerLoggedUser').updateState(false);
            this.get('session').open('firebase', {
                provider: 'password',
                email: company.email,
                password: company.password
            }).then(function() {
                //console.log('success signing in company');
                self.transitionTo('company-profile');
            }).catch(function(error) {
                alert(error);
            });
        },
        signInSubscriber(subscriber) {
            var self = this;
            this.get('checkerLoggedUser').updateState(true);
            this.get('session').open('firebase', {
                provider: 'password',
                email: subscriber.email,
                password: subscriber.password
            }).then(function() {
                self.transitionTo('subscriber-profile');
            }).catch(function(error) {
                alert(error);
            });
        }
    }
});
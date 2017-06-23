import Ember from 'ember';

export default Ember.Route.extend({
    checkerLoggedUser: Ember.inject.service('signeduser-check'),
    beforeModel() {
        var self=this;
        //console.log(this.get('checkerLoggedUser').issubscribe);
        this.get('session').fetch().then(function(){
            self.store.query('subscriber', {
                    orderBy: 'useremail',
                    equalTo: (self.get('session.currentUser.email'))
                })
                .then(function(users) {
                    if (users.toArray().length > 0) {
                        self.get('checkerLoggedUser').updateState(true);
                    } else {
                        self.get('checkerLoggedUser').updateState(false);
                    }
                });
        }).catch(function(error) {
            console.log(error);
        });
    },
    actions: {
        signIn() {
            //console.log(this.get('session').get('currentUser').email);
            this.transitionTo('signin');
        },
        signOut() {
            this.get('session').close().then(function() {
                console.log('logged out');
            }).catch(function(error) {
                console.log(error);
            });
            this.get('checkerLoggedUser').updateState(false);
        }
    }
});
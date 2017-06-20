/*
handle sign in and update session with authenticated user details
*/
import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        signIn(userdetails) {
            var self = this;
            this.get('session').open('firebase', {
                    provider: 'password',
                    email: userdetails.email,
                    password: userdetails.password
                }).then(function() {
                    //console.log(userdetails.email);
                   // self.transitionTo('index');
                })
                .catch(function(error) {
                    var errorCode = error.code;
                    if (errorCode == 'auth/wrong-password') {
                        alert('Wrong password');
                    }
                    alert(error);
                });
        },
        cancelSignIn() {
            this.transitionTo('index');
        }
    }
});
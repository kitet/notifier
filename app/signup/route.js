/*
  handle sign up form submission 
*/

import Ember from 'ember';

export default Ember.Route.extend({
    firebaseApp: Ember.inject.service(),
    actions: {
        signUp(userobj) {
            const auth = this.get('firebaseApp').auth();
            auth.createUserWithEmailAndPassword(userobj.ema, userobj.password).then((userResponse) => {
                //to save to our database users
                const user = this.store.createRecord('user', {
                    uid: userResponse.uid,
                    ema: userResponse.email,
                    username: userobj.displayName
                });
                return user.save();
            }).catch(function(error) {
                var erroCode = error.code;
                if (erroCode == 'auth/weak-password') {} else {}
            });
            this.transitionTo('index');
        },
        cancelSignUp() {
            this.transitionTo('index');
        }
    }
});
import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
	actions:{
		signIn(){
			var user={
				email:this.get('email'),
				password:this.get('password')
			};
			this.sendAction('signIn',user);
			// this.set('email')='';
			// this.set('password')='';
		},
		cancelSignIn(){
			this.sendAction('cancelSignIn');
		}
	}
});

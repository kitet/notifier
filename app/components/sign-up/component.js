import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		signUserUp(){
			var user={
				username: this.get('username'),
				email: this.get('email'),
				password: this.get('password')
			}
			this.sendAction('signUserUp', user);
		}
	}
});

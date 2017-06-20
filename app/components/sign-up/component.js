import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		signUp(){
			var userobj={
				ema:this.get('email'),
				password:this.get('password'),
				displayName: this.get('username')
			}
			this.sendAction('signUp', userobj);
		},
		cancelSignUp(){
			this.sendAction('cancelSignUp');
		}

	}
});

import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		signInCompany(){
			var params={
				email:this.get('email'),
				password: this.get('password')
			}
			this.sendAction('signInCompany', params);
		}
	}
});

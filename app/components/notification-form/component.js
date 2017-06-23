import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		sendNotification(){
			var notification = {
                    title: this.get('title'),
                    email: this.get('email'),
                    message: this.get('message'),
            };
            this.sendAction('sendN', notification);
		}
	}
});

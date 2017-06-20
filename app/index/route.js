import Ember from 'ember';
import AWS from 'npm:aws-sdk';
import config from '../config/environment';


const ses=new AWS.SES({
	apiVersion:"2010-12-01",
	accessKeyId: 'AKIAJFLJS3SZTENOZ23A',
	"secretAccessKey": '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',
	"region": "us-east-1"
});

export default Ember.Route.extend({
	model(){
		return this.store.findAll('subscriber');
	},
	afterModel(model){
		model.forEach(function(item){
			console.log(item.get('useremail'));
		});
	},
	actions:{
		sendNotification(){
			/*
				loop through this.get(model) get all subscribers emails 
				for each subsriber send an email with the format below
				check for successful response
				avoid timeout when company has so many subscribers
				
			*/
			function sendEmailFunc(sender, recipient, title, body){
				var emailParams={
					Destination: {ToAddresses:[recipient]},
					Message:{
						Body:{
							Text:{
								Data:body,
								Charset: 'UTF-8'
							}
						},
						Subject:{Data: title, Charset: 'UTF-8'}
					},
					ReplyToAddresses: [sender],
					Source:'Notifier <'+sender+'>'
				};
				ses.sendEmail(emailParams, function(error){
					if(error){
						console.log('Error' +error);
					}
					else{
						console.log('Success');
					}
				});
			}
			//loop through all emails and send emails to them
			
		

			// var emails=['kitetnet@gmail.com', 'ktnwriter@gmail.com','ylaw8@dnsdeer.com','foughtsentertainment@gmail.com'];
			// emails.forEach(function(email){
			// 	sendEmailFunc('kitetnet@gmail.com', email,"test title","body test");
			// 	//sendSMSFunc();
			// 	//sendAppNotification();
			// });
		}
	}
});

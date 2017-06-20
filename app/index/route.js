import Ember from 'ember';
import AWS from 'npm:aws-sdk'

const ses=new AWS.SES({
	apiVersion:"2010-12-01",
	accessKeyId: 'AKIAJFLJS3SZTENOZ23A',
	"secretAccessKey": '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',
	"region": "us-east-1"
});

export default Ember.Route.extend({
	actions:{
		sendEmail(){
			var emailParams={
				Destination: {ToAddresses:['kitetnet@gmail.com']},
				Message:{
					Body:{
						Text:{
							Data:'My name is Nicholas',
							Charset: 'UTF-8'
						}
					},
					Subject:{Data: 'Testing', Charset: 'UTF-8'}
				},
				ReplyToAddresses: ['kitetnet@gmail.com'],
				Source:'Nicholas <kitetnet@gmail.com>'
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
	}
});

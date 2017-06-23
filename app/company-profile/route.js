import Ember from 'ember';
import AWS from 'npm:aws-sdk';
import config from '../config/environment';


const ses = new AWS.SES({
    apiVersion: "2010-12-01",
    accessKeyId: 'AKIAJFLJS3SZTENOZ23A',
    "secretAccessKey": '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',
    "region": "us-east-1"
});

export default Ember.Route.extend({
    model() {
        try {
            return this.store.query('company', {
                orderBy: 'email',
                equalTo: 'tulipke@gmail.com'
            });
        } catch (error) {
            console.log(error);
        }
    },
    company: [],
    afterModel(model) {
        this.set('company', model);
    },
    checkerLoggedUser: Ember.inject.service('signeduser-check'),
    // formshow: true,
    actions: {
        sendN(notification) {
            console.log('i get her');
                //function
            function sendEmailFunc(sender, recipient, title, body) {
                var emailParams = {
                    Destination: {
                        ToAddresses: [recipient]
                    },
                    Message: {
                        Body: {
                            Text: {
                                Data: body,
                                Charset: 'UTF-8'
                            }
                        },
                        Subject: {
                            Data: title,
                            Charset: 'UTF-8'
                        }
                    },
                    ReplyToAddresses: [sender],
                    Source: 'Notification <' + sender + '>'
                };
                ses.sendEmail(emailParams, function(error) {
                    if (error) {
                        console.log('Error' + error);
                    } else {
                        console.log('Success');
                    }
                });
            }
            //get all subscribers
            var self = this;
            this.get('company').forEach(function(company) {
                company.get('subscribers').forEach(function(subscriber) {
                    self.store.findRecord('subscriber', subscriber.get('id')).then(function(subs) {
                        sendEmailFunc('kitetnet@gmail.com', subs.get('useremail'), notification.title, notification.message);
                    });
                });
            });
        }
    }
});
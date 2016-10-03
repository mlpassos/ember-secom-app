import Ember from 'ember';

let props = {
	title: 'Home',
	subtitle: 'Bem-vindo ao aplicativo da SECOM',
	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam rem eveniet dolores, repellendus sint eligendi earum. Impedit saepe quasi dicta? Accusamus dolore iusto, possimus! In modi amet, maiores eos!'
};

export default Ember.Route.extend({
	cordova: Ember.inject.service(),
	activate: function() {
      this.get('cordova').on('deviceready', this, '_deviceReady');
    },
    _deviceReady: function() {
    	if (cordova.InAppBrowser.open) {
    		window.open = cordova.InAppBrowser.open;
    	} else {
    		alert('nao existe InAppBrowser');
    	}
    	var push = PushNotification.init({
		    android: {
		        senderID: "605443485040"
		    },
		    browser: {
		        pushServiceURL: 'https://ember-secom-app.firebaseio.com'
		    },
		    ios: {
		        alert: "true",
		        badge: "true",
		        sound: "true"
		    },
		    windows: {}
		});

		push.on('registration', function(data) {
		    // data.registrationId
		    alert('registrado ' + data.registrationId);
		});

		push.on('notification', function(data) {
			// alert('mensagem: ' + data.message);
			navigator.notification.alert(
			    data.message,  // message
			    function(){},         // callback
			    data.title,            // title
			    'Ok'                  // buttonName
			);
		    // data.message,
		    // data.title,
		    // data.count,
		    // data.sound,
		    // data.image,
		    // data.additionalData
		});

		push.on('error', function(e) {
		    alert(e.message);
		});
	},	
	model() {
		return props;
	}
});
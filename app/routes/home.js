import Ember from 'ember';

let props = {
	title: 'Home',
	subtitle: 'Bem-vindo ao aplicativo da SECOM',
	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam rem eveniet dolores, repellendus sint eligendi earum. Impedit saepe quasi dicta? Accusamus dolore iusto, possimus! In modi amet, maiores eos!'
};

export default Ember.Route.extend({
	// cordova: Ember.inject.service(),
	// activate: function() {
 //      this.get('cordova').on('deviceready', this, '_deviceReady');
 //    },
 //    _deviceReady: function() {
	// 	if (navigator.notification) {
	// 		navigator.notification.alert(
	// 		    'Device ready',  // message
	// 		    function(){},         // callback
	// 		    'Game Over',            // title
	// 		    'Done'                  // buttonName
	// 		);	
	// 	} else {
	// 		alert('fail');
	// 	}	
 //    },
	model() {
		return props;
	}
});
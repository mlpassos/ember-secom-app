import Ember from 'ember';

let props = {
	title: 'Home',
	subtitle: 'Bem-vindo ao aplicativo da SECOM',
	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam rem eveniet dolores, repellendus sint eligendi earum. Impedit saepe quasi dicta? Accusamus dolore iusto, possimus! In modi amet, maiores eos!'
};

export default Ember.Route.extend({
	cordova: Ember.inject.service(),
	activate: function() {
      // use named function to unsubscribe later
      this.get('cordova').on('deviceready', this, '_deviceReady');
    },
    _deviceReady: function() {
	    alert('device ready');
	    this.get('cordova').on('volumeupbutton', this, '_volumeUp');

	    // create a new contact object
		// var contact = navigator.contacts.create();
		// contact.displayName = "Márcio";
		// contact.nickname = "Motu";            // specify both to support all devices

		// // populate some fields
		// var name = new ContactName();
		// name.givenName = "Márcio";
		// name.familyName = "Passos";
		// contact.name = name;
		// store contact phone numbers in ContactField[]
		//    var phoneNumbers = [];
		//    phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
		//    phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
		//    phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
		//    contact.phoneNumbers = phoneNumbers;

		//    var photos = [];
		//    photos[0] = new ContactField('url', 'http://instadev.com.br/docs/avatar.jpg', true);
		//    contact.photos = photos;

		// // save to device
		// contact.save(function() {alert('gravou');},function() {alert('deu pau');});
    },
    _volumeUp: function() {
      alert('volume up');
    },
	model() {
		return props;
	}
});
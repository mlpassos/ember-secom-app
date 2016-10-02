import Ember from 'ember';

export default Ember.Route.extend({
	// cordova: Ember.inject.service(),
	// notes: '',
	// activate: function() {
 //      // use named function to unsubscribe later
 //      this.get('cordova').on('deviceready', this, '_deviceReady');
 //    },
 //    _deviceReady: function() {
	// 	alert('pronto');
 //    },
	actions: {
		addToContacts() {
			var contact = navigator.contacts.create();
			contact.displayName = "Secretaria de Comunicação do Governo do Pará";
			contact.nickname = "SECOM - PA";            // specify both to support all devices
			contact.note = "A Secretaria de Estado de Comunicação, é responsável pela execução centralizada das atividades"
						   + " de jornalismo, comunicação institucional, novas mídias, relações públicas, pesquisa de opinião,"
						   + " democratização do acesso à informação e à comunicação, publicidade, propaganda e marketing.";

			// populate some fields
			var name = new ContactName();
			name.givenName = "Secretaria de Comunicação";
			name.familyName = "do Governo do Pará";
			contact.name = name;
			// store contact phone numbers in ContactField[]
		    var phoneNumbers = [];
		    phoneNumbers[0] = new ContactField('home', '91-3202-0900', true);
		    // phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
		    // phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
		    contact.phoneNumbers = phoneNumbers;

		    var urls = [];
		    urls[0] = new ContactField('site', 'http://www.secom.pa.gov.br', true);
		    contact.urls = urls;

		    var endArray = [];
		    var obj = new ContactAddress();//true, 'home', 'Av. Dr. Freitas, 2523 - Sacramenta, Belém - PA', 'Av. Dr. Freitas, 2523', 'Belém', 'PA', '66000-000', 'Brasil');
		    obj.perf = true;
		    obj.type = 'home';
		    obj.streetAddress = 'Av. Dr. Freitas, 2523';
		    obj.formatted = 'Av. Dr. Freitas, 2523 - Sacramenta, Belém - PA';
		    obj.locality = 'Belém';
		    obj.region = 'PA';
		    obj.postalCode = '66000-000';
		    obj.country = 'Brasil';
		    endArray[0] = obj;
		    contact.addresses = endArray;

		    var photos = [];
		    photos[0] = new ContactField('url', 'https://d1i0fc51bv4e6i.cloudfront.net/noticias/wp-content/uploads/2015/09/02135842/par%C3%A1.jpg', true);
		    contact.photos = photos;
		    // let este = this;
			// save to device
			contact.save(function() {
					navigator.notification.alert(
					    'Contato gravado com sucesso!',  // message
					    function(){},         // callback
					    'Aviso',            // title
					    'Ok'                  // buttonName
					);
			},function() {
					navigator.notification.alert(
					    'Oops, uma pedra no meio do caminho. Por favor, tente novamente.',  // message
					    function(){},         // callback
					    'Aviso',            // title
					    'Ok'                  // buttonName
					);
			});
		}
	},
	props: {
		title: 'Contato',
		subtitle: 'Aqui você encontra endereço e adiciona aos seus contatos.',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam rem eveniet dolores, repellendus sint eligendi earum. Impedit saepe quasi dicta? Accusamus dolore iusto, possimus! In modi amet, maiores eos!'
	},
	model() {
		return this.get('props');
	},
	setupController(controller) {
		controller.set('props', this.get('props'));
	}
});
// cordova: Ember.inject.service(),
// 	activate: function() {
//       // use named function to unsubscribe later
//       this.get('cordova').on('deviceready', this, '_deviceReady');
//     },
//     _deviceReady: function() {
// 	    alert('device ready');
// 	    this.get('cordova').on('volumeupbutton', this, '_volumeUp');

// 	    // create a new contact object
// 		// var contact = navigator.contacts.create();
// 		// contact.displayName = "Márcio";
// 		// contact.nickname = "Motu";            // specify both to support all devices

// 		// // populate some fields
// 		// var name = new ContactName();
// 		// name.givenName = "Márcio";
// 		// name.familyName = "Passos";
// 		// contact.name = name;
// 		// store contact phone numbers in ContactField[]
// 		//    var phoneNumbers = [];
// 		//    phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
// 		//    phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
// 		//    phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
// 		//    contact.phoneNumbers = phoneNumbers;

// 		//    var photos = [];
// 		//    photos[0] = new ContactField('url', 'http://instadev.com.br/docs/avatar.jpg', true);
// 		//    contact.photos = photos;

// 		// // save to device
// 		// contact.save(function() {alert('gravou');},function() {alert('deu pau');});
//     },
//     _volumeUp: function() {
//       alert('volume up');
// },
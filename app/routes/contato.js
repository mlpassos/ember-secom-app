import Ember from 'ember';

export default Ember.Route.extend({
	// cordova: Ember.inject.service(),
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
		    // adresses[0] = new ContactAddress('type', 'home');
		    // adresses[1] = new ContactAddress('streetAddress', 'Av. Dr. Freitas, 2523.');
		    // adresses[2] = new ContactAddress('formatted', 'Av. Dr. Freitas, 2523 - Sacramenta, Belém - PA');
		    // adresses[3] = new ContactAddress('locality', 'Belém');
		    // adresses[4] = new ContactAddress('region', 'PA');
		    // adresses[4] = new ContactAddress('postalCode', '66000-000');
		    // adresses[5] = new ContactAddress('country', 'Brasil');
		    // adresses[6] = new ContactAddress('pref', 'true');
		    // addresses[0] = new ContactAddress({
		    // 	'pref': true,
		    // 	'type': 'home',
		    // 	'formatted': 'Av. Dr. Freitas, 2523 - Sacramenta, Belém - PA',
		    // 	'streetAddress': 'Av. Dr. Freitas, 2523',
		    // 	'locality': 'Belém',
		    // 	'region': 'PA',
		    // 	'postalCode': '66000-000',
		    // 	'country': 'Brasil'
		    // });
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

			// save to device
			contact.save(function() {
					alert('Contato gravado com sucesso!');
			},function() {
					alert('Oops, uma pedra no meio do caminho. Por favor, tente novamente.');
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
	// ,
	// setupController(controller) {
	// 	this._super(...arguments);

	// 	controller.setProperties({ 
	// 	  props: this.get('props'),
	//       lat: -1.4255971,
	//       lng: -48.4570937,
	//       zoom: 16,
	//       markers: Ember.A([
	//         {
	//           id: 'secom',  // Recommended
	//           lat: -1.4255971, // Required
	//           lng: -48.4570937, // Required
	//           icon: 'http://maps.google.com/mapfiles/ms/icons/red.png',
	//           label: '',
	//           opacity: .8,
	//           optimized: true,
	//           // place: new google.maps.MarkerPlace(),
	//           position: new google.maps.LatLng(), //['-1.4255971','-48.4570937']),
	//           // shape: new google.maps.MarkerShape(),
	//           click: function(event, marker) {
	//           	// alert('cliked');
	//           },
	//           infoWindow: {
	//          //    content: '<div class="text-left">'+
	// 			      // '<h4>Secretaria de Comunicação do Estado do Pará</h4>'+
	// 			      // '<small>A Secretaria de Estado de Comunicação, é responsável' +
	// 			      // ' pela execução centralizada das atividades de jornalismo, comunicação institucional,' +
	// 			      // ' novas mídias, relações públicas, pesquisa de opinião, democratização do acesso à informação' +
	// 			      // ' e à comunicação, publicidade, propaganda e marketing.</small>' +
	// 			      // '</div>',
	// 			content: '<div>Secretaria de Comunicação do Estado do Pará</div>',
	//             visible: false
	//         	},
	//           rightclick: function(event, marker) {},
	//           dblclick: function(event, marker) {},
	//           mouseover: function(event, marker) {},
	//           mouseout: function(event, marker) {},
	//           mouseup: function(event, marker) {},
	//           mousedown: function(event, marker) {},
	//           drag: function(event, marker) {},
	//           dragstart: function(event, marker) {},
	//           dragend: function(event, marker) {},
	//           anchorPoint: new google.maps.Point(),
	//           animation: google.maps.Animation.DROP,
	//           clickable: true,
	//           crossOnDrag: true,
	//           cursor: 'pointer',
	//           draggable: true,
	//           title: 'string',
	//           visible: true,
	//           zIndex: 999
	//         }
	//       ])
	//     });
	// }
});
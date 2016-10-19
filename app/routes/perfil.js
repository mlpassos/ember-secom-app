import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),
	checkboxSelections: ['38', '40', '41'],
	checkboxChoices: [{
		id: 1,
		label: 'teste'
	}],
	props: {
		title: 'Perfil',
		subtitle: 'Bem-vindo ao seu perfil',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam rem eveniet dolores, repellendus sint eligendi earum. Impedit saepe quasi dicta? Accusamus dolore iusto, possimus! In modi amet, maiores eos!'
	},
	model() {
		let userId = this.get('session.user.userId');
		// return this.store.query('user', {orderBy: 'userId', equalTo: userId}).then(function(users) {
		//   return users.get('firstObject');
		// }).then(function(user) {
		//   return user;
		// });
		return Ember.RSVP.hash({
	        user: this.store.query('user', {orderBy: 'userId', equalTo: userId}).then(function(users) {
			  return users.get('firstObject');
			}).then(function(user) {
			  return user;
			}),
		    props: this.get('props'),
		    tags: this.store.findAll('tag')
		});
	},
	actions: {
		gravarUsuario(user) {
			let userId = user.get('userId');
			let displayName = user.get('displayName');
			let email = user.get('email');
			this.get('store').query('user', {orderBy: 'userId', equalTo: userId }).then( (user) =>{
				user.set('displayName', displayName);
			  	user.set('email', email);
			  	user.save().then(function() {
			  		navigator.notification.alert(
	                    'Dados do usuário atualizados',
	                    function(){},
	                    'Aviso',
	                    'Ok'
	                );
			  	});
			});
		}
	},
	setupController(controller) {
		this._super(...arguments);
		controller.set('session', this.get('session'));
		controller.set('checkboxChoices', this.get('checkboxChoices'));
		controller.set('checkboxSelections', this.get('checkboxSelections'));
	}
});
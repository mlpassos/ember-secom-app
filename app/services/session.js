import Ember from 'ember';

const {RSVP: {Promise}} = Ember;

export default Ember.Service.extend({
	store: Ember.inject.service(),
	user: {
		isLoggedIn: false,
		userId: '',
		displayName: '',
		email: '',
		imageUrl: ''
	},
	login() {
		// Google Login
		let _this = this;
		// alert('oi');
		 // this.get('store').query('user', {userId: 'testando' }).then( (records) =>{
   //          console.log('AQUI');
   //          if(records.get('length') === 0){
   //          	alert('nao tem');
   //          } else {
   //          	alert('ja tem');
   //          }
		 // });
        window.plugins.googleplus.login({},
            function (obj) {
              alert(JSON.stringify(obj)); // do something useful instead of alerting
              _this.set('user.displayName', obj.displayName);
              _this.set('user.email', obj.email);
              _this.set('user.imageUrl', obj.imageUrl);
              _this.set('user.isLoggedIn', true);
              _this.set('user.userId', obj.userId);
              // alert(_this.get('user'));
              _this.get('store').query('user', {orderBy: 'userId', equalTo: obj.userId }).then( (records) =>{
		            if(records.get('length') === 0){
		            	let userRecord = _this.get('store').createRecord('user', {
			              	userId: obj.userId,
			              	email: obj.email,
			              	displayName: obj.displayName,
			                imageUrl: obj.imageUrl
			                // tags: {slug: 'comunicacao', title:'titulo', description:'desc', post_count:10}
			            });
			            userRecord.save().then(function() {
			            	navigator.notification.alert(
		                        'Usuário cadastrado com sucesso',  // message
		                        function(){},         // callback
		                        'Aviso',            // title
		                        'Ok'                  // buttonName
		                    );
			            });
		            } else {
	            		navigator.notification.alert(
	                        'Usuário já cadastrado',  // message
	                        function(){},         // callback
	                        'Aviso',            // title
	                        'Ok'                  // buttonName
	                    );
		            }
		      });
              

      //       return new Promise((resolve)=>{
		    //     _this.get('store').query('user', {orderBy: 'userId', equalTo: obj.userId }).then( (records) =>{
		    //         if(records.get('length') === 0){
		    //             resolve(_this.get('store').createRecord('user',{
		    //                 userId: obj.userId,
			   //            	email: obj.email,
			   //            	displayName: obj.displayName,
			   //            	imageUrl: obj.imageUrl
		    //             }));// end resolve
		    //         }// end if
		    //         else{
		    //             resolve(records.get('firstObject'));
		    //         }// end else
		    //     });// end store
		    // }); // end promise

            },
            function (msg) {
              alert('error: ' + msg);
            }
        );
	},
	logout() {
		let _this = this;
		window.plugins.googleplus.logout(
		    function (msg) {
		      alert('Você saiu'); // do something useful instead of alerting
		      _this.set('user.isLoggedIn', false);
		      _this.set('user.displayName', '');
              _this.set('user.email', '');
              _this.set('user.imageUrl', '');
              _this.set('user.userId', '');
		    }
		);
	}
});

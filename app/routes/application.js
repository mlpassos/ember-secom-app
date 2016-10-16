import TransitionToListenerRoute from 'ember-cli-routing-service/routes/transition-to-listener';

const { get } = Ember;


export default TransitionToListenerRoute.extend({
    cordova: Ember.inject.service(),
    session: Ember.inject.service(),
    activate: function() {
      this.get('cordova').on('deviceready', this, '_deviceReady');
    },
    _deviceReady: function() {
        // in App browser
        if (cordova.InAppBrowser.open) {
            window.open = cordova.InAppBrowser.open;
        } else {
            alert('nao existe InAppBrowser');
        }
        // Push Notifications
        PushNotification.hasPermission(function(data) {
            if (data.isEnabled) {
               var push = PushNotification.init({
                    android: {
                        senderID: "605443485040",
                        forceShow: "true"
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
                });

                push.on('error', function(e) {
                    alert('Erro de push: ' + e.message);
                });
            } else {
                alert('Push is off');
            }
        });
    },
	beforeModel(){
        // debugger;
        // return this.get('session').fetch().catch(function(){});
    },
    model(){
        // return this.store.findAll('post');
    },
    actions:{
        login(){
            this.get('session').login();
        },
        logout(){
            this.get('session').logout();
            this.route.transitionTo('home');
        }
    }
    ,
    setupController(controller) {
        this._super(...arguments);
        controller.set('session', this.get('session'));
    }
});
import TransitionToListenerRoute from 'ember-cli-routing-service/routes/transition-to-listener';

const { get } = Ember;

export default TransitionToListenerRoute.extend({
    cordova: Ember.inject.service(),
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
        // Google Login
        window.plugins.googleplus.login({},
            function (obj) {
              alert(JSON.stringify(obj)); // do something useful instead of alerting
            },
            function (msg) {
              alert('error: ' + msg);
            }
        );
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
            get(this,'session').open('firebase', { provider: 'google'}).then(function(data) {
                console.log(data);
            });
        },
        logout(){
            get(this,'session').close();
            this.route.transitionTo('home');
        }
    }
})
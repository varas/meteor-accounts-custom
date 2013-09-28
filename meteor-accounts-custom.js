if (Meteor.isClient) {
  Template.usuario.events({
    'click .login' :  function () {
      Meteor.loginWithPersona({}, function() {
      });
    },
    'click .logout' : function () {
      Meteor.logout();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Accounts.onCreateUser(function(options, user) {
    user.profile = {};
    user.profile.email = user.services.persona.email;
    return user;
  });


}

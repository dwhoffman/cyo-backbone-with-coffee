(function() {

  $(function() {
    var loginView;
    App.currentUser = new App.Models.User();
    return loginView = new App.Views.Login({
      el: $('#loginView'),
      model: App.currentUser
    });
  });

}).call(this);

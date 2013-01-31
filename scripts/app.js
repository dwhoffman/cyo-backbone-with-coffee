﻿(function() {

  $(function() {
    var loginView, newQuestionView;
    App.currentUser = new App.Models.User();
    loginView = new App.Views.Login({
      el: $('#loginView'),
      model: App.currentUser
    });
    newQuestionView = new App.Views.NewQuestion({
      el: $('#newQuestionView')
    });
    return this;
  });

}).call(this);

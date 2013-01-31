(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.NewQuestion = (function(_super) {

    __extends(NewQuestion, _super);

    function NewQuestion() {
      this.render = __bind(this.render, this);
      return NewQuestion.__super__.constructor.apply(this, arguments);
    }

    NewQuestion.prototype.events = {
      "click #addItem": "addItem"
    };

    NewQuestion.prototype.initialize = function(options) {
      App.currentUser.on("change", this.render);
      return this.render();
    };

    NewQuestion.prototype.render = function() {
      $("#asker").text(App.currentUser.get("userName"));
      this.$el.toggleClass("hidden", !App.currentUser.isLoggedIn());
      return this;
    };

    NewQuestion.prototype.addItem = function() {
      var question;
      question = {
        text: this.$("#newQuestion").val(),
        userName: App.currentUser.get("userName")
      };
      this.model.add(new App.Models.Question(question));
      return this.$("#newQuestion").val('');
    };

    return NewQuestion;

  })(Backbone.View);

}).call(this);

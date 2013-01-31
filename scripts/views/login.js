(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.Login = (function(_super) {

    __extends(Login, _super);

    function Login() {
      this.render = __bind(this.render, this);
      return Login.__super__.constructor.apply(this, arguments);
    }

    Login.prototype.events = {
      "click #logIn": "login"
    };

    Login.prototype.initialize = function() {
      return this.model.on("change", this.render);
    };

    Login.prototype.render = function() {
      this.$el.toggleClass("hidden", this.model.isLoggedIn());
      return this;
    };

    Login.prototype.login = function() {
      return this.model.logIn(this.$("#userName").val());
    };

    return Login;

  })(Backbone.View);

}).call(this);

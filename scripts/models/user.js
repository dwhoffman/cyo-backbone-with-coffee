﻿(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Models.User = (function(_super) {

    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.logIn = function(userName) {
      if (!userName) {
        return;
      }
      return this.set('userName', userName);
    };

    User.prototype.isLoggedIn = function() {
      return this.has('userName');
    };

    return User;

  })(Backbone.Model);

}).call(this);
﻿(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Models.Question = (function(_super) {

    __extends(Question, _super);

    function Question() {
      return Question.__super__.constructor.apply(this, arguments);
    }

    return Question;

  })(Backbone.Model);

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Collections.Questions = (function(_super) {

    __extends(Questions, _super);

    function Questions() {
      return Questions.__super__.constructor.apply(this, arguments);
    }

    Questions.prototype.model = App.Models.Question;

    Questions.prototype.localStorage = new Backbone.LocalStorage("cyOverflow:questions");

    return Questions;

  })(Backbone.Collection);

}).call(this);

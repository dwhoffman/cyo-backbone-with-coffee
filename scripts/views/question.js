(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.Question = (function(_super) {

    __extends(Question, _super);

    function Question() {
      this.render = __bind(this.render, this);
      return Question.__super__.constructor.apply(this, arguments);
    }

    Question.prototype.tagName = 'li';

    Question.prototype.className = 'question';

    Question.prototype.template = _.template($("#question-template").html());

    Question.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    };

    return Question;

  })(Backbone.View);

}).call(this);

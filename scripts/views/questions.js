(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.Questions = (function(_super) {

    __extends(Questions, _super);

    function Questions() {
      this.renderItem = __bind(this.renderItem, this);

      this.render = __bind(this.render, this);
      return Questions.__super__.constructor.apply(this, arguments);
    }

    Questions.prototype.initialize = function() {
      this.model.on("reset", this.render);
      return this.model.on("add", this.renderItem);
    };

    Questions.prototype.render = function() {
      this.$el.html("");
      this.model.each(this.renderItem);
      return this;
    };

    Questions.prototype.renderItem = function(item) {
      var newView;
      newView = new App.Views.Question({
        model: item
      });
      return this.$el.append(newView.render().el);
    };

    return Questions;

  })(Backbone.View);

}).call(this);

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

    Question.prototype.events = {
      "click .voteup": "upVote",
      "click .votedown": "downVote"
    };

    Question.prototype.render = function() {
      var data, userName;
      data = this.model.toJSON();
      data.tally = this.model.voteTally();
      this.$el.html(this.template(data));
      userName = App.currentUser.get('userName');
      this.$('.voteup').toggleClass("selected", this.model.didUserVoteUp(userName));
      this.$('.votedown').toggleClass("selected", this.model.didUserVoteDown(userName));
      return this;
    };

    Question.prototype.upVote = function() {
      return this.setVote("up");
    };

    Question.prototype.downVote = function() {
      return this.setVote("down");
    };

    Question.prototype.setVote = function(voteType) {
      this.model.vote(App.currentUser.get('userName'), voteType);
      return this.render();
    };

    return Question;

  })(Backbone.View);

}).call(this);

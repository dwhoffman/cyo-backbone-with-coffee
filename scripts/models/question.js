(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Models.Question = (function(_super) {

    __extends(Question, _super);

    function Question() {
      return Question.__super__.constructor.apply(this, arguments);
    }

    Question.prototype.defaults = {
      votes: []
    };

    Question.prototype.constrain = function(value, min, max) {
      if (value < min) {
        return min;
      }
      if (value > max) {
        return max;
      }
      return value;
    };

    Question.prototype.getExistingVote = function(userName) {
      return _(this.get('votes')).find(function(vote) {
        return vote.voter === userName;
      });
    };

    Question.prototype.vote = function(userName, voteType) {
      var existingVote, voteValue;
      voteValue = voteType === 'up' ? 1 : -1;
      existingVote = this.getExistingVote(userName);
      if (existingVote) {
        existingVote.value = this.constrain(existingVote.value + voteValue, -1, 1);
      } else {
        this.get('votes').push({
          value: voteValue,
          voter: userName
        });
      }
      return this.save();
    };

    Question.prototype.voteTally = function() {
      var reducer;
      reducer = function(tally, vote) {
        return tally + vote.value;
      };
      return this.get('votes').reduce(reducer, 0);
    };

    return Question;

  })(Backbone.Model);

}).call(this);

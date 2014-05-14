window.Journal.Views.PostsForm = Backbone.View.extend({

  template: JST["post_form"],

  render: function() {
    var renderedContent = this.template({
      post: this.model
    });

    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "submit form": "update"
  },

  update: function(event){
    var view =  this;
    event.preventDefault();

    var $target = $(event.currentTarget);

    var newAttrs = $(event.target).serializeJSON();

    if (this.model.isNew()) {
      this.collection.create(newAttrs.post, {
        success: this.redirectToIndex
      });
    } else {
      this.model.save(newAttrs, {
        success: this.redirectToIndex,

        error: function(model, response) {
          view.model.set(newAttrs['post']);
          view.render();
          view.$el.append("<div>" + response.responseText  + "<div>")
        }
      });
    }
  },

  redirectToIndex: function() {
    Backbone.history.navigate("", {trigger: true});
  }
});

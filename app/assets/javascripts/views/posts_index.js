window.Journal.Views.PostsIndex = Backbone.View.extend({

  template: JST["index"],

  render: function() {
    var renderedContent = this.template({
      posts: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "click button.delete": "destroy"
  },

  initialize: function(){
    this.listenTo(this.collection,
      "destroy add change:title remove reset",
      this.render);
  },


  destroy: function(event){
    var $target = $(event.currentTarget);
    var id = $target.data('id');
    var modelToDestroy = this.collection.get(id);

    modelToDestroy.destroy();
  },
});

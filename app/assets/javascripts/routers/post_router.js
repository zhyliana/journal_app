window.Journal.Routers.PostRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/new" : "postNew",
    "posts/:id" : "postShow",
    "posts/:id/edit" : "postForm"
  },

  postsIndex: function() {
    var indexView = new Journal.Views.PostsIndex({
      collection: Journal.Collections.posts
    });

    Journal.Collections.posts.fetch();
    this._swapView(indexView);
  },

  postShow: function(id) {
    var post = Journal.Collections.posts.getOrFetch(id);
    var showView = new Journal.Views.PostsShow({
      model: post
    })
    this._swapView(showView);
  },

  postForm: function(id){
    var post = Journal.Collections.posts.getOrFetch(id);
    var postFormView = new Journal.Views.PostsForm({
      model: post
    })

    this._swapView(postFormView);
  },

  postNew: function() {

    var post = new Journal.Models.Post();
    var postFormView = new Journal.Views.PostsForm({
      model: post,
      collection: Journal.Collections.posts
    });

    this._swapView(postFormView);
  },

  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    $('#post-index').html(view.render().$el);
  }
});
window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(){
    var $rootEl = $('#post-index');
    var posts = Journal.Collections.posts = new Journal.Collections.Posts();
    posts.fetch({
      success: function() {
        new Journal.Routers.PostRouter();
        Backbone.history.start();
      }
    })
  }


};

$(document).ready(function(){
  Journal.initialize();
});

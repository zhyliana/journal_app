window.Journal.Collections.Posts = Backbone.Collection.extend({
  url: "/posts",
  model: Journal.Models.Post,

  getOrFetch: function(id){
    var model;
    var posts = this;

    if (model = this.get(id)) {
      model.fetch(id);
      return model;
    } else {
      model = new Journal.Models.Post( { id: id } );
      model.fetch({
        success: function(){
          posts.add(model)
        }
      });

      return model;
    }
  }
});


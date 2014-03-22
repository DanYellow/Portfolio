define( ['galleryCollection', 'galleryListItemsView', 'backbone'], function(galleryCollection, galleryListItemsView) {
  window.RoutesManager = Backbone.Router.extend({
    routes: {
      '/:id' : 'displayImg',


      '*path': 'index'
    },
    index: function () {
      galleryCollection.fetch({ success:function (data) {
            console.log(data.first(5), data);

            var loopNumber =  Math.ceil(data.length / 8);
            //console.log(loopNumber);

            for (var i = 0; i < 2 ; i++) {
                var truc = new window.portfolio.galleryListItemsView(data);
                truc.render();
            };
            //galleryListItemsView = new window.portfolio.galleryListItemsView(data);
            //var postsListView = new window.portfolio.galleryItemsView({collection: data});
            //galleryListItemsView.render();
        }});
    },
    displayImg: function (id) {
     alert(id);
    }
  });

  window.router = new RoutesManager();
});
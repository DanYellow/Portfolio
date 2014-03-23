define( ['galleryCollection', 'galleryListItemsView',
         'galleryView', 'backbone'], function(GalleryCollection, GalleryListItemsView, GalleryView) {

  window.RoutesManager = Backbone.Router.extend({
    routes: {
      ':id' : 'displayImg',
      '*actions' : 'index'
    },
    initialize: function() {
      displayGallery();
    },
    index: function () {

    },
    displayImg: function (id) {
     if (!GalleryView.fetched) {
        GalleryCollection.fetch({
          success: function() {
            GalleryView.fetched = true;
            GalleryView.model = GalleryCollection.get(id);
            GalleryView.render();
          }
        })
      } else {
        GalleryView.model = GalleryCollection.get(id);
        GalleryView.render();
      }
    }
  });

  function displayGallery() {
    GalleryCollection.fetch({
      success:function (data) {
        var loopNumber =  Math.ceil(data.length / 8);

        var str = 0, end = 8;

        for (var i = 0; i < loopNumber ; i++) {
            var listView = new window.portfolio.galleryListItemsView(data);
            listView.render(str, end);
            str +=8;
            end +=8;
        };
      }
    });
  }
});


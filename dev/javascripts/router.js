define( ['galleryCollection', 'galleryView', 'galleryListItemsView', 'app'],
  function(GalleryCollection, GalleryView, GalleryListItemsView, App) {
  var RoutesManager = Backbone.Router.extend({
    routes: {
      ':id' : 'displayImg',
      '*actions' : 'index'
    },
    initialize: function() {
      App.init();
      displayGallery();
    },
    index: function () {
    },
    displayImg: function (id) {
      var galleryDatas = new GalleryCollection();
      var galleryView = new GalleryView();

     if (!galleryView.fetched) {
        galleryDatas.fetch({
          success: function() {
            galleryView.fetched = true;
            galleryView.model = galleryDatas.get(id);
            galleryView.render();
          }
        })
      } else {
        galleryView.model = galleryDatas.get(id);
        galleryView.render();
      }
    }
  });

  function displayGallery() {
    var galleryThumbsDatas = new GalleryCollection();
    galleryThumbsDatas.fetch({
      success:function (data) {
        var loopNumber =  Math.ceil(data.length / 8);
        var str = 0, end = 8;

        for (var i = 0; i < loopNumber; i++) {

            var listView = new GalleryListItemsView(data);
            listView.render(str, end);
            str +=8;
            end +=8;
        };
      }
    });
  }
  return RoutesManager;
});


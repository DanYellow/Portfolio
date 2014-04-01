define( ['galleryItem', 'backbone'], function(GalleryItem) {
    var galleryItems = Backbone.Collection.extend({
      model: GalleryItem,
      url: 'javascripts/datas.json'
    });

    return galleryItems;
});

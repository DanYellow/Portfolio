define( ['backbone', 'galleryItem'], function(galleryItem) {
    var model = window.portfolio.galleryItem;

    window.portfolio.galleryItems = Backbone.Collection.extend({
      model: window.portfolio.galleryItem,
      url: 'javascripts/datas.json'
    });

    return new window.portfolio.galleryItems();
});

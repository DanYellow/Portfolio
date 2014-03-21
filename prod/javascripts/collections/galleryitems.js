define( ['backbone', 'galleryItem'], function(galleryItem) {
    var model = window.portfolio.galleryItem;
    console.log(model, galleryItem);

    window.portfolio.galleryItems = Backbone.Collection.extend({
      model: window.portfolio.galleryItem,
      url: 'javascripts/datas.json'
    });

    return window.portfolio.galleryItems;
});

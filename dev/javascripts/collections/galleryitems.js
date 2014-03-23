define( ['backbone', 'galleryItem'], function(galleryItem) {
    var model = window.portfolio.galleryItem;
    console.log(galleryItem, model);
    window.portfolio.galleryItems = Backbone.Collection.extend({
      model: model,
      url: 'javascripts/datas.json'
    });

    return new window.portfolio.galleryItems();
});

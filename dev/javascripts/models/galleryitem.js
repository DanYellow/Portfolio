define(['backbone'], function() {
    window.portfolio.galleryItem = Backbone.Model.extend({
        urlRoot: 'javascripts/datas.json'
    });

    return window.portfolio.galleryItem;
});

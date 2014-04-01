define(['backbone'], function() {
    var galleryItem = Backbone.Model.extend({
        urlRoot: 'javascripts/datas.json'
    });

     return galleryItem;
});

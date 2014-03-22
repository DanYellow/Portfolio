
    window.portfolio = {}
    requirejs.config({
        baseUrl: 'javascripts/vendors',
        paths: {
            jquery: 'jquery.min',
            backbone: ['backbone', 'underscore'],
            owlslider: 'owl.carousel.min',
            hbs: 'hbs',

            //Misc
            app: '../app',

            //Models
            galleryItem: '../models/galleryitem',

            //Collections
            galleryCollection: '../collections/galleryitems',

            //Views
            galleryListItemsView: '../Views/gallerylistitemsview',
            galleryView: '../Views/galleryview'

            /*//Routes
            routes: 'routes.js'*/
        },

        shim: {
            owlslider: {
                deps: ['jquery'],
                exports: 'Owlslider'
            }
        },

        hbs: {
          disableI18n: true
        }
    });

(function() {
    require(
        [
          'galleryItem',
          'galleryCollection',
          'galleryListItemsView',
          'app',
          'galleryView'
        ], function(galleryItem, galleryCollection, galleryListItemsView, App, GalleryView) {

        App.init();


        galleryCollection.fetch({ success:function (data) {
            console.log(data.first(5), data);

            var loopNumber =  Math.ceil(data.length / 8);
            //console.log(loopNumber);

            //for (var i = 0; i < 2 ; i++) {
                var truc = new window.portfolio.galleryListItemsView(data);
                truc.render();
            //};
            //galleryListItemsView = new window.portfolio.galleryListItemsView(data);
            //var postsListView = new window.portfolio.galleryItemsView({collection: data});
            //galleryListItemsView.render();



        }});
    });
}).call(this);
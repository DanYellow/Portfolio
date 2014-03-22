    window.portfolio = {}
    requirejs.config({
        baseUrl: 'javascripts/vendors',
        paths: {
            jquery: 'jquery.min',
            backbone: ['backbone', 'underscore'],
            owlslider: 'owl.carousel.min',
            hbs: 'hbs',
            pxloader: 'PxLoader',
            pxloaderimage: 'PxLoaderImage',

            //Misc
            app: '../app',

            //Models
            galleryItem: '../models/galleryitem',

            //Collections
            galleryCollection: '../collections/galleryitems',

            //Views
            galleryListItemsView: '../Views/gallerylistitemsview',
            galleryView: '../Views/galleryview',

            //Routes
            router: '../router'
        },

        shim: {
            owlslider: {
                deps: ['jquery'],
                exports: 'Owlslider'
            },
            pxloader: {
                exports: "PxLoader"
            },
            pxloaderimage: {
                deps: ["pxloader"],
                exports: "PxLoaderImage"
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
          'galleryView',
          'router'
        ], function(galleryItem, galleryCollection, galleryListItemsView, App, GalleryView) {

        App.init();

        var truc = new window.RoutesManager();
        Backbone.history.start();


    });
}).call(this);
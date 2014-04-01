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
            galleryListItemsView: '../views/gallerylistitemsview',
            galleryView: '../views/galleryview',

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
    require(['router', 'jquery', 'app', 'owlslider'], function(RoutesManager, $, App) {
        var router = new RoutesManager();
        Backbone.history.start();
    });
}).call(this);
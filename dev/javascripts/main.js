
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

    require(
        [
          'owlslider',
          'galleryItem',
          'galleryCollection',
          'galleryListItemsView',
          'app',
          'galleryView'
        ], function(owlslider, galleryItem, galleryCollection, galleryListItemsView, App, GalleryView) {

        App.init();


/*        galleryCollection.fetch({ success:function (data) {
            window.postsListView = new window.portfolio.galleryListItemsView(data);
            //var postsListView = new window.portfolio.galleryItemsView({collection: data});
            postsListView.render();
        }});*/



        $("#gallery-carousel").owlCarousel({
            singleItem: true
        });
    });
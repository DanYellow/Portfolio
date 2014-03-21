
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
            galleryItemsView: '../Views/galleryitemsview'

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
          'galleryItemsView',
          'app'
        ], function(owlslider, galleryItem, galleryCollection, galleryItemsView, App) {

        App.cachedElements();

        window.collection = new window.portfolio.galleryItems();

        window.collection.fetch({ success:function (data) {
            var postsListView = new window.portfolio.galleryItemsView(data);
            //var postsListView = new window.portfolio.galleryItemsView({collection: data});
            postsListView.render();
        }});

        /*$("#gallery").owlCarousel({
            singleItem: true
        });*/

        App.$figure.find('a').on('click', function(){
            App.$nav.removeClass('hide-gallery').addClass('show-gallery');
            App.$figure.css('height', '35%');
            App.$figure.css('transform', 'scale(1.25)');
            App.$overlay.css('opacity', 0.65);
        });

        $('.icon-circle-arrow-down').on('click focus', function(){
            App.$nav.removeClass('show-gallery').addClass('hide-gallery');
            App.$figure.css('height', '95%');
            App.$figure.css('transform', 'scale(1)');
            App.$overlay.css('opacity', 0);
        });

        App.$figure.find('a').trigger('click');
    });
//(function() {
  define( ['hbs!../templates/list-item',
           'galleryView',
           'galleryCollection',
           'app', 'owlslider'], function(tplListView, GalleryView, GalleryCollection, App) {

      var galleryListItemsView = Backbone.View.extend({
        tagName: 'ul',
        className: 'item',

        initialize: function(data) {
          this.collection = data;

           $(function() {
              App.$galleryCarousel.owlCarousel({
                singleItem: true,
                paginationNumbers: true,
                pagination: true,
                scrollPerPage: true,
                mouseDrag: false
            });
          });
        },
        render: function(str, end) {
          var _that = this;

          // fetch, when that is done, replace 'Loading' with content
          _.each(this.collection.slice(str, end), function(data){
            $(_that.el).addClass('gallery');
            $('#gallery-carousel').append($(_that.el).append(tplListView({datas: data.attributes})));
          });
        },
        events: {
          'click li' : 'addIndicator',
          'focus li a' : 'addIndicator'
        },
        addIndicator: function (evt) {
          $('li.active').removeClass('active');
          $(evt.currentTarget).closest('li').addClass('active');

          App.triggerHideThumbs();
        }
      });

    return galleryListItemsView;
  });
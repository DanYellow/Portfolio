(function() {
  define( ['hbs!../templates/list-item',
           'galleryView',
           'galleryCollection',
           'app',
           'jquery',
           'backbone',
           'owlslider'], function(tplListView, GalleryView, GalleryCollection, App) {

      window.portfolio.galleryListItemsView = Backbone.View.extend({
        tagName: 'ul',
        className: 'item',

        initialize: function(data) {
          this.collection = data;

          $(document).ready(function(){
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

          //console.log('loading');
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
  });
}).call(this);
/*    ItemView = Backbone.View.extend({
        tagName: "li",
        className: 'truc',
        events: {
            "click": "clicked"
        },

        clicked: function(e){
            e.preventDefault();
            var name = this.model.get("imgSRC");
            console.log(name);
        },

        render: function(){
            var truc = tplOne({data: this.model.toJSON()});
            console.log($(this.el), truc );
            $(this.el).append( truc);
        }
    });*/
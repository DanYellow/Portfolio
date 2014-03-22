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
                    mouseDrag: false,

                    startDragging: function(){
                      $(this.el).find('li').off('click');
                    },
                    afterAction: function () {
                      $(this.el).find('li').on('click', false);
                    }
                });
              });
        },
        render: function() {
          var _that = this;

          console.log('loading');
          // fetch, when that is done, replace 'Loading' with content
  /*        console.log(this.collection.models, this.collection.first(1),  this.collection.fetch());
          _.each(this.collection.models, function(data){
            $(_that.el).addClass('gallery');
            $('#gallery-carousel').append($(_that.el).append(tplListView({datas: data})));
          });*/
          //console.log(this.collection);
          this.collection.fetch().done(function(data){
              //Datas are loaded
              $(_that.el).addClass('gallery');
              App.$galleryCarousel.append($(_that.el).append(tplListView({datas: data})));


          });
        },
        events: {
          'click li' : 'displayImg'
        },
        displayImg: function (evt) {
          var id = $(evt.currentTarget).closest('li').data('id');

          GalleryView.model = GalleryCollection.get(id);
          GalleryView.render();
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
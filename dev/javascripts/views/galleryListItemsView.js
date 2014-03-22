define( ['hbs!../templates/list-item',
         'galleryView',
         'galleryCollection',
         'backbone',
         'jquery'], function(tplListView, GalleryView, GalleryCollection) {
    window.portfolio.galleryListItemsView = Backbone.View.extend({
      el: $("#gallery"),
      tagName: 'ul',

      initialize: function(data) {
        this.collection = data;
      },
      render: function() {
        var _that = this;
        var html = "";
        $(this.el).html("");

        console.log('loading');
        // fetch, when that is done, replace 'Loading' with content
        this.collection.fetch().done(function(data){
            //Datas are loaded
            $(_that.el).append(tplListView({datas: data}));
        });
      },
      events: {
        'click li' : 'doge'
      },
      doge: function (evt) {
        var id = $(evt.currentTarget).closest('li').data('id');
        GalleryView.model = GalleryCollection.get(id);
        GalleryView.render();
      }
    });
});

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
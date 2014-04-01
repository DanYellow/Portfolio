(function() {
  define( ['hbs!../templates/gallery', 'app',
           'backbone', 'jquery',
           'pxloaderimage', 'galleryListItemsView'], function(tplGalleryView, App) {

    var GalleryView = Backbone.View.extend({
      el: $("figure"),
      render: function() {
        console.log('changed');
        var _that = this;
        var loader = new PxLoader();
        var id =  _that.model.toJSON().id;
        loader.addImage(this.model.toJSON().imgSRC);

        var $containerForeground = $(this.el).find('div.foreground'),
            $containerBackground = $(this.el).find('div.background');

          $containerForeground.addClass('foreground-anim');

          loader.addProgressListener(function(e) {
            $containerBackground.html(e.resource.img).addClass('background-anim');
            $containerBackground.find('img').attr('data-id', _that.model.toJSON().id);
          });

          $('ul.gallery li').eq(id).addClass('active');

          loader.start();

          $containerBackground.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
            $(this).removeClass('background background-anim').addClass('foreground');
          });

          $containerForeground.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
            $(this).removeClass('foreground foreground-anim').addClass('background');
          });
      }
    });

    return GalleryView;
  });
}).call(this);
(function() {
  define( ['hbs!../templates/gallery', 'app',
           'backbone', 'jquery',
           'pxloaderimage', 'galleryListItemsView'], function(tplGalleryView, App) {

    window.portfolio.GalleryView = Backbone.View.extend({
      el: $("figure"),
      initialize: function() {
      },
      render: function() {
        var _that = this;
        var loader = new PxLoader();
        var id =  _that.model.toJSON().id;
        loader.addImage(this.model.toJSON().imgSRC);

        var $imgForeground = $(this.el).find('img.foreground'),
            $imgBackground = $(this.el).find('img.background');

          $imgForeground.addClass('foreground-anim');

          loader.addCompletionListener(function() {
            $imgBackground.addClass('background-anim')
                          .attr('src', _that.model.toJSON().imgSRC)
                          .attr('data-id', _that.model.toJSON().id);
          });

           //$('ul.gallery li').eq(id).addClass('active');

          // $(document).ready(function(){
            console.log(id)
            $('ul.gallery li').eq(id).addClass('active');
          //});


          loader.start();

          $imgBackground.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
            $(this).removeClass('background background-anim').addClass('foreground');
          });

          $imgForeground.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
            $imgForeground.removeClass('foreground foreground-anim').addClass('background');
          });
      }
    });

    return new window.portfolio.GalleryView();
  });
}).call(this);
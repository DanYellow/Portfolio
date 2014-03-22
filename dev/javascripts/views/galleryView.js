define( ['hbs!../templates/gallery', 'app', 'backbone', 'jquery', 'pxloaderimage'], function(tplGalleryView, App) {

  window.portfolio.GalleryView = Backbone.View.extend({
    el: $("figure"),
    initialize: function() {
    },
    render: function() {
      var _that = this;
      var loader = new PxLoader();
      loader.addImage(this.model.toJSON().imgSRC);

      var $imgForeground = $(this.el).find('img.foreground'),
          $imgBackground = $(this.el).find('img.background');

        $imgForeground.addClass('foreground-anim');

        loader.addCompletionListener(function() {
          $imgBackground.addClass('background-anim')
                        .attr('src', _that.model.toJSON().imgSRC)
                        .attr('data-id', _that.model.toJSON().id)
                        //.removeClass('background background-anim').addClass('foreground');
        });

        loader.start();

        $imgBackground.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          $(this).removeClass('background background-anim').addClass('foreground');
        });


        $imgForeground.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          $imgForeground.removeClass('foreground foreground-anim').addClass('background');

         });


        //$(this.el).append( tplGalleryView(this.model.toJSON()) );

        App.triggerHideThumbs();
    },
    afterRender: function () {
      // When the page is loaded, hides the thumbs container
      App.triggerHideThumbs();
    }
  });

  return new window.portfolio.GalleryView();
});
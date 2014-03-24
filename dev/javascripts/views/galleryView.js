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

        var $containerForeground = $(this.el).find('div.foreground'),
            $containerBackground = $(this.el).find('div.background');

        // var $imgForeground = $containerForeground.find('img.foreground'),
        //     $imgBackground = $containerBackground.find('img.background');

          $containerForeground.addClass('foreground-anim');

          loader.addProgressListener(function(e) {
            console.log(e.resource);
            $containerBackground.html(e.resource.img);
            $containerBackground.addClass('background-anim');

            //e.resource.img.attr('data-id', _that.model.toJSON().id);
            // $imgBackground.attr('src', _that.model.toJSON().imgSRC)
            //               .attr('data-id', _that.model.toJSON().id)
            //               .addClass('background-anim');
          });

           //$('ul.gallery li').eq(id).addClass('active');

          // $(document).ready(function(){
            $('ul.gallery li').eq(id).addClass('active');
          //});


          loader.start();

          $containerBackground.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
            $(this).removeClass('background background-anim').addClass('foreground');
          });

          $containerForeground.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
            $(this).removeClass('foreground foreground-anim').addClass('background');
          });
      }
    });

    return new window.portfolio.GalleryView();
  });
}).call(this);
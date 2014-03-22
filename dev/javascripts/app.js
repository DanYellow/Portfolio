define( ['jquery'], function() {
    var App = {
        init: function() {
          this.cachedElements();
          this.showThumbs();
          this.hideThumbs();

          //Display thumbnails on page load
          this.triggerShowThumbs();
        },
        cachedElements: function () {
            App.$figure  = $('figure');
            App.$nav     = $('nav');
            App.$overlay = $('.overlay');
            App.$iconDown = $('.icon-circle-arrow-down');
        },
        showThumbs: function() {
          App.$figure.find('a').on('click', function(){
              App.$nav.removeClass('hide-gallery').addClass('show-gallery');
              App.$figure.css('height', '35%');
              App.$figure.css('transform', 'scale(1.25)');
              App.$overlay.css('opacity', 0.65);
          });
        },
        hideThumbs: function () {
          $('.icon-circle-arrow-down').on('click', function(){
              App.$nav.removeClass('show-gallery').addClass('hide-gallery');
              App.$figure.css('height', '95%');
              App.$figure.css('transform', 'scale(1)');
              App.$overlay.css('opacity', 0);
          });
        },
        triggerShowThumbs: function() {
          this.$figure.find('a').trigger('click');
        },
        triggerHideThumbs: function() {
          this.$iconDown.trigger('click');
        }
    };

    return App;
});

define(['jquery'], function() {
    var App = {
        init: function() {
          this.cachedElements();
          this.showThumbs();
          this.hideThumbs();
        },
        cachedElements: function () {
            App.$figure          = $('figure');
            App.$nav             = $('nav');
            App.$overlay         = $('.overlay');
            App.$iconDown        = $('.icon-circle-arrow-down');
            App.$galleryCarousel = $('#gallery-carousel');
        },
        showThumbs: function () {
          this.$figure.find('a').on('click', function(){
              var img = $('.foreground').find('img').attr('src');

              App.$nav.removeClass('hide-gallery').addClass('show-gallery');

              App.$figure.css('height', '35%');
              App.$figure.css('transform', 'scale(1.25)');

              App.$overlay.css('opacity', 1);
              //App.$overlay.css("background-image", "url(" + img + ")");
          });
        },
        hideThumbs: function () {
          this.$iconDown.on('click', function(){
              App.$figure.css('height', '95%');
              App.$figure.css('transform', 'scale(1)');
              App.$overlay.css('opacity', 0);
              App.$nav.addClass('hide-gallery').removeClass('show-gallery');
          });
        },
        triggerShowThumbs: function () {
          this.$figure.find('a').trigger('click');
        },
        triggerHideThumbs: function() {
          this.$iconDown.trigger('click');
        }
    };

    return App;
});

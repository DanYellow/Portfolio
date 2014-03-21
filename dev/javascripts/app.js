define( ['jquery'], function() {
    var App = {
        cachedElements: function () {
            App.$figure  = $('figure');
            App.$nav     = $('nav');
            App.$overlay = $('.overlay');
        }
    };

    return App;
});

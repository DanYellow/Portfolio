define( ['hbs!../templates/One', 'backbone', 'jquery'], function(tplOne) {
    window.portfolio.galleryItemsView = Backbone.View.extend({
      el: $("#gallery"),
      tagName: 'li',

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
            console.log(data);
/*            _that.collection.each(function(model) {
              html += '<li><img src="' + model.get("imgSRC") + ' "/></h1>';
            });*/
            $(_that.el).append( tplOne({datas: data}) );
        });

      },
      events: {
        'click' : 'doge'
      },
      doge: function (object) {
        console.log($(object.currentTarget));
      }
    });

    return window.portfolio.galleryItemsView;
});
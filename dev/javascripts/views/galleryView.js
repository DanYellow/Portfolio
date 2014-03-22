define( ['hbs!../templates/gallery', 'app', 'backbone', 'jquery'], function(tplGalleryView, App) {

  window.portfolio.GalleryView = Backbone.View.extend({
    el: $("figure img:first"),
    initialize: function() {
        console.log('view loaded');

        //http://www.sagarganatra.com/2013/01/adding-beforerender-and-afterrender-functions-to-backbone-view.html
        this.render = _.wrap(this.render, function(render) {
          render();
          console.log('render');
          this.afterRender();
        });
    },
    render: function() {
        $(this.el).attr('src', this.model.toJSON().imgSRC);
        $(this.el).attr('data-id', this.model.toJSON().id);
        //$(this.el).append( tplGalleryView(this.model.toJSON()) );
    },
    afterRender: function () {
      App.triggerHideThumbs();
    }
  });

  return new window.portfolio.GalleryView();
});
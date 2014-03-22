define( ['hbs!../templates/gallery', 'app', 'backbone', 'jquery'], function(tplGalleryView, App) {

  window.portfolio.GalleryView = Backbone.View.extend({
    el: $("figure img"),
    initialize: function() {
    },
    render: function() {
        $(this.el).eq(0).addClass('foreground-anim');

        console.log($(this.el));
        $(this.el).eq(1).addClass('background-anim');
        $(this.el).eq(1).attr('src', this.model.toJSON().imgSRC);
        $(this.el).eq(1).attr('data-id', this.model.toJSON().id);


        /*$(this.el).attr('src', this.model.toJSON().imgSRC);
        $(this.el).attr('data-id', this.model.toJSON().id);*/
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
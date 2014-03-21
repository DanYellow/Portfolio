<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{% block title %}My Site{% endblock %}</title>

        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" href="stylesheets/owl.carousel.css" />
        <link rel="stylesheet" href="stylesheets/style.css" />
        {% block stylesheets %}
        {% endblock %}

        <script src="javascripts/vendors/modernizr.js" type="text/javascript"></script>
    </head>
    <body>
        {% block body %}{% endblock %}

        {% block javascripts %}

        {% endblock %}
        <script src="javascripts/vendors/require.js" data-main="javascripts/main" type="text/javascript"></script>
        <script src="//localhost:35729/livereload.js"></script>
    </body>
</html>
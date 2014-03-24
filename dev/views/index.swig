{% extends '_layout/base.swig' %}

{% block stylesheets %}
    {% parent %}
{% endblock %}

{% block body %}
    <figure>
        <div class="overlay"></div>
        <footer>
            <a class="icon-circle-arrow-up" href="javascript:void(0)"></a>
        </footer>
        <!-- src will be changed by backbone -->
        <div class='foreground'>
            <img src="http://lorempixel.com/1900/1500/" alt="img-gallery" class='foreground' />
        </div>
        <div class='background'>
            <img src="http://lorempixel.com/1900/1500/" alt="img-gallery" class='background' />
        </div>
        <aside>
            Wo such small screen
        </aside>
    </figure>

    <section id="nav-container">
        <nav>
            <article>
                <h1><span>JEAN-LOUIS</span></h1>
                <h2><span>Danielo</span></h2>
            </article>
            <header><a class="icon-circle-arrow-down" href="javascript:void(0)"></a></header>

            <section id="gallery-carousel"></section>
        </nav>
    </section>
{% endblock %}
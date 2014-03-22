{% extends '_layout/base.swig' %}

{% block head %}
    {% parent %}

{% endblock %}

{% block body %}
    <figure>
        <div class="overlay"></div>
        <footer>
            <a class="icon-circle-arrow-up" href="javascript:void(0)"></a>
        </footer>
        <!-- src will be changed by backbone -->
        <img src="http://lorempixel.com/1900/1500/" alt="">
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



            <!-- <ul id="gallery"></ul> -->
            <section id="gallery-carousel">
                <ul id="gallery" class="item">
                    {% set loopIterationNumber = 8 %}
                    {% set productCountAsArray = Array(loopIterationNumber) %}

                    {% for i in productCountAsArray %}
                        <li>
                            <img src="http://lorempixel.com/g/1900/1500/" alt="">
                        </li>
                    {% endfor %}
                </ul>
            </section>



            <section id="pagination">
                <ul>
                    {% set truc = 5 %}
                    {% set machin = Array(truc) %}

                    {% for i in machin %}
                        <li>
                            <a href="javascript:void(0)">{{ loop.index }}</a>
                        </li>
                    {% endfor %}
                </ul>
            </section>
            <div id="posts_list"></div>
        </nav>
    </section>
{% endblock %}
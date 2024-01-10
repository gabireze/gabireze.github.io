{% if page.lang == "pt-br" %}

## Sobre mim

<img class="profile-picture" src="assets/img/user.png" alt="Profile image of {{ site.author }}">

{{ site.about_me.portuguese }}
<a style="" href="/assets/pdf/curriculo.pdf" download="Gabriel de Rezende Gonçalves - Currículo">(Baixar currículo)</a>

{% else %}

## About me

<img class="profile-picture" src="/assets/img/user.png" alt="Profile image of {{ site.author }}">

{{ site.about_me.english }}
<a style="" href="/assets/pdf/resume.pdf" download="Gabriel de Rezende Gonçalves - Resume">(Download resume)</a>

{% endif %}

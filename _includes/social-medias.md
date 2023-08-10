{% if page.lang == "pt-br" %}

## Redes Sociais

{% for social in site.social_medias %}
{{ social.emoji }} [{{ social.name }}]({{ social.link }})
{% endfor %}

{% else %}

## Social Media

{% for social in site.social_medias %}
{{ social.emoji }} [{{ social.name }}]({{ social.link }})
{% endfor %}

{% endif %}

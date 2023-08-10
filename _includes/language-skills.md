{% if page.lang == "pt-br" %}

## Idiomas

{% for language in site.languages.portuguese %}

**{{ language.name }}**: {{ language.level }}
{% endfor %}

{% else %}

## Language skills

{% for language in site.languages.english %}

**{{ language.name }}**: {{ language.level }}
{% endfor %}
{% endif %}

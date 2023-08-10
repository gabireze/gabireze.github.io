{% if page.lang == "pt-br" %}

## Contribuições

{% for contribution in site.contribution_methods %}
{% if contribution.link %}
{{ contribution.emoji }} [{{ contribution.name }}]({{ contribution.link }})
{% else %}
{{ contribution.emoji }} {{ contribution.name }}: {{ contribution.value }} {{ contribution.extra }}
{% endif %}
{% endfor %}

{% else %}

## Contributions

{% for contribution in site.contribution_methods %}
{% if contribution.link %}
{{ contribution.emoji }} [{{ contribution.name }}]({{ contribution.link }})
{% else %}
{{ contribution.emoji }} {{ contribution.name }}: {{ contribution.value }} {{ contribution.extra }}
{% endif %}
{% endfor %}

{% endif %}

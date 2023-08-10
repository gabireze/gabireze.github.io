{% if page.lang == "pt-br" %}

## Habilidades Técnicas

{% for skill in site.technical_skills %}

- {{ skill }}
  {% endfor %}

{% else %}

## Technical skills

{% for skill in site.technical_skills %}

- {{ skill }}
  {% endfor %}

{% endif %}

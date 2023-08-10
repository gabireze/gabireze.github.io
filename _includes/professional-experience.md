{% if page.lang == "pt-br" %}

## Experiência

{% for experience in site.experiences.portuguese %}

**{{ experience.title }}** em <a href="{{ experience.company_link }}" target="_blank">{{ experience.company }}</a>

{{ experience.date }}

{{ experience.description | markdownify }}
{% endfor %}

{% else %}

## Professional Experience

{% for experience in site.experiences.english %}

**{{ experience.title }}** em <a href="{{ experience.company_link }}" target="_blank">{{ experience.company }}</a>

{{ experience.date }}

{{ experience.description | markdownify }}
{% endfor %}

{% endif %}

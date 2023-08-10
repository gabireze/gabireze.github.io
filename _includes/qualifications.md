{% if page.lang == "pt-br" %}

## Formação acadêmica

{% for education in site.education.portuguese %}

**{{ education.title }}**

{{ education.degree }} · {{ education.date }}
{% endfor %}

{% else %}

## Qualifications

{% for education in site.education.english %}

**{{ education.title }}**

{{ education.degree }} · {{ education.date }}
{% endfor %}

{% endif %}

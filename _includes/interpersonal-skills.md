{% if page.lang == "pt-br" %}

## Habilidades interpessoais

{% for interpersonal_skills in site.interpersonal_skills.portuguese %}

- {{ interpersonal_skills }}
  {% endfor %}

{% else %}

## Interpersonal skills

{% for interpersonal_skills in site.interpersonal_skills.english %}

- {{ interpersonal_skills }}
  {% endfor %}

{% endif %}

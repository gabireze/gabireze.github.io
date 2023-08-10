{% if page.lang == "pt-br" %}

## Informações adicionais

**{{ site.academic_exchanges.portuguese[0].title }}** no [{{ site.academic_exchanges.portuguese[0].institution }}]({{ site.academic_exchanges.portuguese[0].institution_link }})

{{ site.academic_exchanges.portuguese[0].date }} · {{ site.academic_exchanges.portuguese[0].location }}

{{ site.academic_exchanges.portuguese[0].description }}

{% else %}

## Additional information

**{{ site.academic_exchanges.english[0].title }}** at [{{ site.academic_exchanges.english[0].institution }}]({{ site.academic_exchanges.english[0].institution_link }})

{{ site.academic_exchanges.english[0].date }} · {{ site.academic_exchanges.english[0].location }}

{{ site.academic_exchanges.english[0].description }}

{% endif %}

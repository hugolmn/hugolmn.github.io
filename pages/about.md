---
layout: page
title: About Me
permalink: /about-me/
weight: 3
---

<div id="container">
  <p class="text-center">
    <h1><strong>About Me</strong></h1>
  </p>
  <p class="text-center">
    Hi! I'm Hugo Le Moine :wave:<br>
    I'm a Machine Learning Apprentice Engineer at Airbus and soon to graduate from UTC.
  </p>

  <div class="row d-flex justify-content-center mb-3">

    {%- assign unfocused_color = "6c757d" -%}

    {% for account in site.author %}

      {%- assign service_name = account[0] -%}
      {%- assign service_data = site.data.social-media[service_name] -%}
      {%- if service_data -%}
        <a class="social d-flex justify-content-center"  href="{{ service_data.url }}{{ account[1] }}"
           style="color: #{{ unfocused_color }}"
           aria-label="{{ service_name }}"
           onMouseOver="this.style.color='#{{ service_data.color }}'"
           onMouseOut="this.style.color='#{{ unfocused_color }}'">
          <i class="{{ service_data.icon }} fa-2x align-self-center"></i>
        </a>
      {%- endif -%}

    {% endfor %}

  </div>
  <p class="text-center">
   {% include elements/button.html link="/assets/resume/CV_EN_Hugo_Le_Moine.pdf" text='<i class="far fa-file-pdf  fa-1x align-self-center"></i> EN Resume' %}
   {% include elements/button.html link="/assets/resume/CV_FR_Hugo_Le_Moine.pdf" text='<i class="far fa-file-pdf  fa-1x align-self-center"></i> FR Resume' %}
  </p>
</div>


<div class="row">
  {% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
  {% include about/skills.html title="Languages" source=site.data.language-skills %}
</div>




**Other basic knowledge** : Prolog, LaTeX, Lisp, PHP, Assembly x64

**Database** : MySQL, PostgreSQL, MondoDB, Oracle, neo4j

**DevOps** : Linux, Git, Docker, Azure, Anaconda

## Python libraries

- Data analysis & processing : pandas, pyspark, numpy, dask
- Data visualization : matplotlib, seaborn, plotly
- Machine learning : scikit-learn, keras, XGBoost
- Scientific computing : scipy, librosa
- Optimization : pymoo

<div class="row">
  {% include about/timeline.html title="Experiences" source=site.data.experiences-timeline %}
</div>

<div class="row">
  {% include about/timeline.html title="Education" source=site.data.education-timeline %}
</div>

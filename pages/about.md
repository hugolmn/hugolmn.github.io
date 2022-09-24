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
    I'm a Data Scientist at Pierre Fabre Group.
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
   {% include elements/button.html link="/assets/resume/CV_EN_Hugo_Le_Moine_EEO.pdf" text='<i class="far fa-file-pdf  fa-1x align-self-center"></i> Resume' %}
   {% include elements/button.html link="#my-tech-stack" text='My Tech Stack' %}
   {% include elements/button.html link="#languages-i-speak" text='Languages I speak' %}
   {% include elements/button.html link="#experiences" text='Experiences' %}
   {% include elements/button.html link="#education" text='Education' %}
  </p>
</div>

## My Tech Stack
##### Programming languages
---
{% include about/skills.html title="" source=site.data.programming-skills %}
<!-- <a href="https://www.python.org/">Python</a>&nbsp;
<a href="https://www.r-project.org/">R</a>&nbsp;
<a href="https://en.wikipedia.org/wiki/C_(programming_language)">C</a>&nbsp;
<a href="https://en.wikipedia.org/wiki/C%2B%2B">C++</a> -->

##### Data science
---
**Data processing:**&nbsp;
<a href="https://pandas.pydata.org/">pandas</a>&nbsp;
<a href="https://numpy.org/">NumPy</a>&nbsp;
<a href="https://spark.apache.org/">PySpark</a>&nbsp;
<a href="https://www.dask.org/">Dask</a>&nbsp;
<a href="https://scipy.org/">SciPy</a>

**Dataviz:**&nbsp;
<a href="https://www.tableau.com">Tableau</a>&nbsp;
<a href="https://matplotlib.org/">Matplotlib</a>&nbsp;
<a href="https://plotly.com/">Plotly</a>&nbsp;
<a href="https://altair-viz.github.io/">Vega-Altair</a>


**Machine Learning:**&nbsp;
<a href="https://scikit-learn.org/stable/">scikit-learn</a>&nbsp;
<a href="https://keras.io/">Keras</a>&nbsp;
<a href="https://www.tensorflow.org">TensorFlow</a>&nbsp;
<a href="https://xgboost.readthedocs.io">XGBoost</a>&nbsp;
<a href="https://spacy.io/">spaCy</a>

##### Databases
---
**SQL:**&nbsp;
<a href="https://www.mysql.com">MySQL</a>&nbsp;
<a href="https://www.postgresql.org/">PostgreSQL</a>&nbsp;
<a href="https://www.snowflake.com">Snowflake</a>&nbsp;
<a href="https://www.cockroachlabs.com/">CockroachDB</a>&nbsp;
<a href="https://www.sqlite.org/">SQLite</a>

**NoSQL:**&nbsp;
<a href="https://www.mongodb.com">MongoDB</a>&nbsp;
<a href="https://neo4j.com">Neo4j</a>

##### Web apps
---
**Frameworks:**&nbsp;
<a href="https://plotly.com/">Dash</a>&nbsp;
<a href="https://flask.palletsprojects.com">Flask</a>&nbsp;
<a href="https://streamlit.io/">Streamlit</a>

**Web design:**&nbsp;
<a href="https://developer.mozilla.org/fr/docs/Web/HTML">HTML</a>&nbsp;
<a href="https://developer.mozilla.org/fr/docs/Web/CSS">CSS</a>&nbsp;
<a href="https://getbootstrap.com/">Bootstrap</a>

##### IaaS & PaaS
---
<a href="https://azure.microsoft.com">Azure</a>: AKS, VMs, Functions, Pipelines, DevOps, Databricks, Database for PostgreSQL.

<a href="https://cloud.google.com">GCP</a>: Cloud Functions, Scheduler, Pub/Sub, Secret Manager, Drive API.

<a href="https://aws.amazon.com">AWS</a>: EC2, S3

<a href="https://www.palantir.com/platforms/foundry">Palantir Foundry</a>: Contour, Quiver, Code Repositories, Slate.

<a href="https://www.heroku.com/">Heroku</a>: Dyno, Postgre

##### DevOps
---
**VCS/SCM:**&nbsp;
<a href="https://git-scm.com/">git</a>&nbsp;
<a href="https://github.com/">GitHub</a>&nbsp;
<a href="https://gitlab.com">GitLab</a>

**CI/CD:**&nbsp;
<a href="https://github.com/features/actions">GitHub Actions</a>&nbsp;
<a href="https://docs.gitlab.com/ee/ci/">GitLab CI/CD</a>&nbsp;
<a href="https://azure.microsoft.com/products/devops/pipelines/">Azure Pipelines</a>

**Testing:**&nbsp;
<a href="https://docs.pytest.org">PyTest</a>&nbsp;
<a href="https://www.selenium.dev/">Selenium</a>

**Deployment:**&nbsp;
<a href="https://www.docker.com/">Docker</a>&nbsp;
<a href="https://kubernetes.io/">Kubernetes</a>&nbsp;
<a href="https://www.portainer.io/">Portainer</a>

**Monitoring:**&nbsp;
<a href="https://www.elastic.co/kibana/">Kibana</a>&nbsp;
<a href="https://www.portainer.io/">Portainer</a>

##### Development environments
---
**Operating Systems:**&nbsp;
<a href="https://www.microsoft.com/windows">Windows</a>&nbsp;
<a href="https://www.linux.org/">Linux</a>

**IDEs:**&nbsp;
<a href="https://code.visualstudio.com/">VS Code</a>&nbsp;
<a href="https://jupyter.org/">Jupyter</a>&nbsp;
<a href="https://colab.research.google.com/">Google Colab</a>

**Package and env management:**&nbsp;
<a href="https://www.anaconda.com">Anaconda</a>&nbsp;
<a href="https://pypi.org/">PyPI</a>

## Languages I speak
{% include about/skills.html title="Languages" source=site.data.language-skills %}

<div class="row">
  {% include about/timeline.html title="Experiences" source=site.data.experiences-timeline %}
</div>

<div class="row">
  {% include about/timeline.html title="Education" source=site.data.education-timeline %}
</div>

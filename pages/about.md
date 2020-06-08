---
layout: page
title: About Me
permalink: /about-me/
weight: 3
---

# **About Me**

Hi I am **{{ site.author.name }}** :wave:,<br>

<p class="text-center"> {% include elements/button.html link="/assets/resume/CV_EN_Hugo_Le_Moine.pdf" text="EN Resume" %} </p>

<div class="row">
{% include about/timeline.html title="Experiences" source=site.data.experiences-timeline %}
</div>

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Languages" source=site.data.language-skills %}
</div>

**Other programming languages** : Prolog, LaTeX, Jekyll, Lisp, PHP, Assembly x64

**Database** : MySQL, PostgreSQL, MondoDB, Oracle, neo4j

**DevOps** : Linux, Git, Docker

## Python libraries

- Data analysis & processing : numpy, pandas, dask
- Data visualization : matplotlib, seaborn
- Machine learning : scikit-learn, keras
- Scientific computing : scipy, librosa

<div class="row">
{% include about/timeline.html title="Education" source=site.data.education-timeline %}
</div>

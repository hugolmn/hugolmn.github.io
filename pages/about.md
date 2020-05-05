---
layout: page
title: About Me
permalink: /about-me/
weight: 3
---

# **About Me**

Hi I am **{{ site.author.name }}** :wave:,<br>
This personal website is still under construction, stay tuned!

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Languages" source=site.data.language-skills %}
</div>
**Other programming languages** : PHP, Prolog, Lisp, Assembly x64

**Database** : MySQL, PostgreSQL, MondoDB, Oracle, neo4j

## Python libraries

- Data processing : numpy, pandas, dask
- Data visualization : matplotlib, seaborn
- Machine learning : scikit-learn, keras
- Signal processing : librosa


<div class="row">
{% include about/timeline.html title="Experiences" source=site.data.experiences-timeline %}
</div>

<div class="row">
{% include about/timeline.html title="Education" source=site.data.education-timeline %}
</div>
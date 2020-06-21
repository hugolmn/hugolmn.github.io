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
  <p class="text-center">
   {% include elements/button.html link="/assets/resume/CV_EN_Hugo_Le_Moine.pdf" text='<i class="far fa-file-pdf  fa-1x align-self-center"></i> EN Resume' %}
   {% include elements/button.html link="/assets/resume/CV_FR_Hugo_Le_Moine.pdf" text='<i class="far fa-file-pdf  fa-1x align-self-center"></i> FR Resume' %}
  </p>
</div>


<div class="row">
  {% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
  {% include about/skills.html title="Languages" source=site.data.language-skills %}
</div>

**Other programming languages** : Prolog, LaTeX, Jekyll, Lisp, PHP, Assembly x64

**Database** : MySQL, PostgreSQL, MondoDB, Oracle, neo4j

**DevOps** : Linux, Git, Docker

## Python libraries

- Data analysis & processing : pandas, numpy, dask
- Data visualization : matplotlib, seaborn, plotly
- Machine learning : scikit-learn, keras
- Scientific computing : scipy, librosa

```html
<div class="row">
  {% include about/timeline.html title="Experiences" source=site.data.experiences-timeline %}
</div>
```

<div class="row">
  {% include about/timeline.html title="Education" source=site.data.education-timeline %}
</div>

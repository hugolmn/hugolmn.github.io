---
layout: page
title: About Me
permalink: /about-me/
weight: 4
---

<div id="container">
  <p class="text-center">
    <h1><strong>About Me</strong></h1>
  </p>
  <p class="text-center">
    Hi! I'm Hugo Le Moine :wave:<br>
    I'm a Data Scientist and also coding side-projects using Python.
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
  <!-- <p class="text-center">
   {% include elements/button.html link="/assets/resume/CV_EN_Hugo_Le_Moine_EEO.pdf" text='<i class="far fa-file-pdf  fa-1x align-self-center"></i> Resume' %}
   {% include elements/button.html link="#my-tech-stack" text='My Tech Stack' %}
   {% include elements/button.html link="#languages-i-speak" text='Languages I speak' %}
   {% include elements/button.html link="#work-experience" text='Work Experience' %}
   {% include elements/button.html link="#education" text='Education' %}
  </p> -->
</div>


## Languages I speak
&nbsp;
{% include about/skills.html source=site.data.language-skills %}
&nbsp;
## Work Experience
&nbsp;
<div class="row">
  {% include about/timeline.html source=site.data.experiences-timeline %}
</div>

## Education
<div class="row">
  {% include about/timeline.html source=site.data.education-timeline %}
</div>

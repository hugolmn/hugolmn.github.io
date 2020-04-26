---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**

Hi I am **{{ site.author.name }}** :wave:,<br>
This personal website is still under construction, stay Tuned!

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Languages" source=site.data.language-skills %}
</div>

# **Experiences**

<div class="row">
{% include about/timeline.html source=site.data.experiences-timeline %}
</div>

# **Education**

<div class="row">
{% include about/timeline.html source=site.data.education-timeline %}
</div>

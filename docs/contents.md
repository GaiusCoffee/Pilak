---
layout: page
title: Contents
permalink: /contents/
---
<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>    
    <h3 id="{{ category_name }}" class="category-head">&raquo; {{ category_name }}</h3>
    <a name="{{ category_name | slugize }}"></a>
    <ul>
      {% for post in site.categories[category_name] %}
      <li>
        {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
        <span>
          {{ post.date | date: date_format }} &raquo; 
          <a style="font-size:larger;" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </span>
      </li>
      {% endfor %}
    </ul>
  </div>
{% endfor %}
</div>

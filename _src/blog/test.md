---
layout: blog_base.njk
title: test
description: test
meta_title: test
meta_description: test
author: Saeed Mirshekari
date: 2022-10-11T12:35:16.220Z
tags:
  - post
thumbnail: /assets/img/uploads/ag.png
rating: 5
---
<script
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
  type="text/javascript">
</script>

This is an inline equation: $$V_{sphere} = \frac{4}{3}\pi r^3,$$<br>
followed by a display style equation:

$$V_{sphere} = \frac{4}{3}\pi r^3$$

$$
\begin{align}
  \tag{1.1}
  V_{sphere} = \frac{4}{3}\pi r^3
\end{align}
$$

H﻿ere is a code example for you:

<span style="color:blue;background-color:#C0C0C0;">

```python
x = 'hello, python world!'
print(x.split(' '))
x﻿ = 2
```
</span>

<script src="https://gist.github.com/username/a39a422ebdff6e732753b90573100b16.js">
x﻿ = 2
y﻿ = 3
p﻿rint(x+y)
</script>

<div class="">
  <div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kn">from</span> <span class="nn">sklearn.datasets</span> <span class="kn">import</span> <span class="n">make_moons</span>
<span class="kn">from</span> <span class="nn">sklearn.model_selection</span> <span class="kn">import</span> <span class="n">train_test_split</span>
<span class="kn">from</span> <span class="nn">sklearn.ensemble</span> <span class="kn">import</span> <span class="n">RandomForestClassifier</span>
<span class="kn">from</span> <span class="nn">sklearn.linear_model</span> <span class="kn">import</span> <span class="n">LogisticRegression</span>
<span class="kn">from</span> <span class="nn">sklearn.metrics</span> <span class="kn">import</span> <span class="n">precision_recall_curve</span>
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="n">plt</span>

<span class="c1"># Generate some mock data
</span><span class="n">X</span><span class="p">,</span> <span class="n">y</span> <span class="o">=</span> <span class="n">make_moons</span><span class="p">(</span><span class="n">n_samples</span><span class="o">=</span><span class="mi">10000</span><span class="p">,</span> <span class="n">noise</span><span class="o">=</span><span class="mf">0.3</span><span class="p">,</span> <span class="n">random_state</span><span class="o">=</span><span class="mi">42</span><span class="p">)</span>
<span class="n">X_train</span><span class="p">,</span> <span class="n">X_test</span><span class="p">,</span> <span class="n">y_train</span><span class="p">,</span> <span class="n">y_test</span> <span class="o">=</span> <span class="n">train_test_split</span><span class="p">(</span><span class="n">X</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">random_state</span><span class="o">=</span><span class="mi">42</span><span class="p">)</span>

<span class="c1"># Fit two basic models
</span><span class="n">models</span> <span class="o">=</span> <span class="p">[</span><span class="n">RandomForestClassifier</span><span class="p">(),</span> <span class="n">LogisticRegression</span><span class="p">()]</span>
<span class="n">results</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">for</span> <span class="n">m</span> <span class="ow">in</span> <span class="n">models</span><span class="p">:</span>
    <span class="n">m</span><span class="p">.</span><span class="n">fit</span><span class="p">(</span><span class="n">X_train</span><span class="p">,</span> <span class="n">y_train</span><span class="p">)</span>
    <span class="n">results</span><span class="p">.</span><span class="n">append</span><span class="p">(</span><span class="n">m</span><span class="p">.</span><span class="n">predict</span><span class="p">(</span><span class="n">X_test</span><span class="p">))</span>

<span class="c1"># Plot results
</span><span class="n">fig</span><span class="p">,</span> <span class="n">axes</span> <span class="o">=</span> <span class="n">plt</span><span class="p">.</span><span class="n">subplots</span><span class="p">(</span><span class="n">ncols</span><span class="o">=</span><span class="mi">1</span> <span class="o">+</span> <span class="nb">len</span><span class="p">(</span><span class="n">models</span><span class="p">),</span> <span class="n">sharey</span><span class="o">=</span><span class="bp">True</span><span class="p">,</span> <span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">13</span><span class="p">,</span> <span class="mi">5</span><span class="p">))</span>
<span class="n">axes</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="n">scatter</span><span class="p">(</span><span class="n">X</span><span class="p">[:,</span> <span class="mi">0</span><span class="p">],</span> <span class="n">X</span><span class="p">[:,</span> <span class="mi">1</span><span class="p">],</span> <span class="n">c</span><span class="o">=</span><span class="n">y</span><span class="p">,</span> <span class="n">cmap</span><span class="o">=</span><span class="s">"Spectral"</span><span class="p">)</span>
<span class="n">axes</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="n">set_title</span><span class="p">(</span><span class="s">"Actual data"</span><span class="p">)</span>
<span class="k">for</span> <span class="n">ax</span><span class="p">,</span> <span class="n">m</span><span class="p">,</span> <span class="n">r</span> <span class="ow">in</span> <span class="nb">zip</span><span class="p">(</span><span class="n">axes</span><span class="p">[</span><span class="mi">1</span><span class="p">:],</span> <span class="n">models</span><span class="p">,</span> <span class="n">results</span><span class="p">):</span>
    <span class="n">ax</span><span class="p">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">X_test</span><span class="p">[:,</span> <span class="mi">0</span><span class="p">],</span> <span class="n">X_test</span><span class="p">[:,</span> <span class="mi">1</span><span class="p">],</span> <span class="n">c</span><span class="o">=</span><span class="p">(</span><span class="n">r</span> <span class="o">==</span> <span class="n">y_test</span><span class="p">),</span> <span class="n">cmap</span><span class="o">=</span><span class="s">"RdYlGn"</span><span class="p">)</span>
    <span class="n">ax</span><span class="p">.</span><span class="n">set_title</span><span class="p">(</span><span class="sa">f</span><span class="s">"</span><span class="si">{</span><span class="n">m</span><span class="p">.</span><span class="n">__class__</span><span class="p">.</span><span class="n">__name__</span><span class="si">}</span><span class="se">\n</span><span class="s">Correct classification"</span><span class="p">);</span>
</code></pre></div>  </div>
</div>

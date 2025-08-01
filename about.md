---
layout: page
title: More about Myself
permalink: /about/
---

<h1 class="post-title"></h1>
<h2>
<span class="bg-clip-text text-transparent bg-gradient-to-r from-my-orange to-my-pink text-5xl font-extrabold">ducunt volentem fata, nolentem trahunt</span>  <sup id="fnref:1" role="doc-noteref"><a href="#fn:1" class="footnote">1</a></sup>
</h2>

   <div class="footnotes" role="doc-endnotes">
            <ol>
                <li id="fn:1" role="doc-endnote">
                    <p>“Fate favours the bold. And the unwilling? She drags.” -Seneca&nbsp;<a href="#fnref:1" class="reversefootnote"
                            role="doc-backlink">↩</a></p>
                </li>
            </ol>
        </div>

I relate to this quote by Seneca more often than others.

On a regular day: I work in Logistics dealing with Transporters, Senior Management and my Digital Transformation project where I manage fleet tracking for Grasim’s Indian Plants. At home I spend my time learning how to play the guitar, building / writing code / learning code for building ideas I have. 

>An interactive graph of what I do on a regular day: read, sleep, eat, work (deal with transporters, dispatch, GPS), and play games on the PS5.

<div id="about-piechart" style="width: 500px; height: 450px; margin: 2em auto; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
  <div id="chart-loading" style="text-align: center; padding: 50px; color: #6b7280;">
    Loading chart... 📊
  </div>
</div>

<!-- Load RoughViz dependencies -->
<script src="https://unpkg.com/d3@5"></script>
<script src="https://unpkg.com/rough-viz@2.0.5"></script>

<script>
// Ensure libraries are loaded before creating chart
function createRoughPieChart() {
  // Check if RoughViz is available
  if (typeof roughViz === 'undefined') {
    console.error('RoughViz library not loaded');
    document.getElementById('chart-loading').innerHTML = '❌ Chart library failed to load';
    return;
  }

  // Clear loading message
  document.getElementById('chart-loading').style.display = 'none';

  // Create the pie chart
  try {
    new roughViz.Pie({
      element: '#about-piechart',
      data: [
        { label: 'Sleep', value: 8 },
        { label: 'Work (Logistics, GPS, Dispatch)', value: 9 },
        { label: 'Eat', value: 2 },
        { label: 'Read', value: 1.5 },
        { label: 'Play Guitar / Code / Build', value: 2 },
        { label: 'Games / Relax', value: 1.5 }
      ],
      labels: 'label',
      values: 'value',
      title: 'A Typical Day in My Life (Hours)',
      titleFontSize: '1.2rem',
      colors: ['#fbbf24', '#f472b6', '#60a5fa', '#34d399', '#f87171', '#a78bfa'],
      roughness: 1.5,
      strokeWidth: 2,
      fillWeight: 0.8,
      highlight: '#ffd700',
      legend: true,
      legendPosition: 'right',
      width: 460,
      height: 400,
      margin: { top: 50, right: 120, bottom: 50, left: 50 }
    });
    
    console.log('RoughViz pie chart created successfully');
  } catch (error) {
    console.error('Error creating RoughViz chart:', error);
    document.getElementById('about-piechart').innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <h3>A Typical Day in My Life (Hours)</h3>
        <ul style="list-style: none; padding: 0; text-align: left; display: inline-block;">
          <li style="margin: 8px 0;">🛌 Sleep: 8 hours (33%)</li>
          <li style="margin: 8px 0;">💼 Work (Logistics, GPS, Dispatch): 9 hours (38%)</li>
          <li style="margin: 8px 0;">🍽️ Eat: 2 hours (8%)</li>
          <li style="margin: 8px 0;">📚 Read: 1.5 hours (6%)</li>
          <li style="margin: 8px 0;">🎸 Play Guitar / Code / Build: 2 hours (8%)</li>
          <li style="margin: 8px 0;">🎮 Games / Relax: 1.5 hours (6%)</li>
        </ul>
        <p style="color: #6b7280; font-style: italic;">Chart failed to load - showing static version</p>
      </div>
    `;
  }
}

// Wait for DOM and libraries to load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    // Give libraries time to load
    setTimeout(createRoughPieChart, 1000);
  });
} else {
  // DOM already loaded, but wait for libraries
  setTimeout(createRoughPieChart, 1000);
}
</script>

What gives me immense pleasure? To crush my enemies, to see them driven before me, and to hear the lamentations of their women. [^2]

Just kidding. I like to relax while watching anime, sit-coms (i like laughing) and building things. I like solving puzzles and problems, talking about ideas, the stars and art. And I want to write about these on `Move 37`, my Blog. 

I also like reading:
- wisdom from kind people on the internet
- weird facts like these: Peeling a Post-It® from the [side](https://tylercipriani.com/blog/2022/05/28/on-the-proper-use-of-post-its/) - and it won't curl up when stuck on surfaces.
- And books

What I am doing these days? [click here](https://fallinginenigma.github.io/current/)

[^2]: [Part 2, Chapter XI of "Genghis Khan The Emperor Of All Men" by H. Lamb (1936)](https://archive.org/details/genghiskhantheem035122mbp/page/n115/mode/2up)

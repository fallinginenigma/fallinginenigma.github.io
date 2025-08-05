---
layout: page
title: More about Karthik
permalink: /about/
---
<h1 class="post-title"></h1>

<!--
<h2>
<span class="bg-clip-text text-transparent bg-gradient-to-r from-my-orange to-my-pink text-5xl font-extrabold">ducunt volentem fata, nolentem trahunt</span>  <sup id="fnref:1" role="doc-noteref"><a href="#fn:1" class="footnote">1</a></sup>
</h2>

   <div class="footnotes" role="doc-endnotes">
            <ol>
                <li id="fn:1" role="doc-endnote">
                    <p>“Fate favours the bold. And the unwilling? She drags.” -Seneca <a href="#fnref:1" class="reversefootnote"
                            role="doc-backlink">↩</a></p>
                </li>
            </ol>
        </div>
--->

I like to relax while watching anime, sit-coms (i like laughing), and building things. I like solving puzzles and problems, talking about ideas, the stars, and art. I want to write about these ideas and things I care about on `Move 37`, my Blog. It is sort of my [digital garden](https://x.com/ness_labs/status/1262778800649187330) on the internet. [^1]

I also like reading:

- wisdom from kind people on the internet
- weird facts like these: Peeling a Post-It® from the [side](https://tylercipriani.com/blog/2022/05/28/on-the-proper-use-of-post-its/) - and it won't curl up when stuck on surfaces.
- And books ([all kinds](https://www.goodreads.com/user/show/15760290-karthik))

What I am doing these days? [find out here](https://fallinginenigma.github.io/current/)

On a normal day: I'm working, scrolling Instagram, watching a few episodes of a new show, and reading about the latest things in tech. Previously I worked in Customer Logistics dealing with Transporters, Senior Management, and a Digital Transformation project where I managed fleet tracking for Grasim’s Manufacturing Plants in India.

<div id="vis0" style="width: 100%; max-width: 600px; height: 400px; margin: 2em auto;"></div>

<!-- Load RoughViz from CDN -->

<script src="https://unpkg.com/rough-viz@2.0.5"></script>

<script>
// Create RoughViz pie chart according to official documentation
document.addEventListener('DOMContentLoaded', function() {
  // Wait a moment for the library to fully load
  setTimeout(function() {
    try {
      // Check if roughViz is available
      if (typeof roughViz === 'undefined') {
        throw new Error('RoughViz library not loaded');
      }

      // Create pie chart using the exact syntax from the official docs
      new roughViz.Pie({
        element: '#vis0', // Container element
        data: {
          labels: ['Sleep', 'Work (Logistics, GPS, Dispatch)', 'Eat', 'Read', 'Play Guitar / Code / Build', 'Games / Relax'],
          values: [8, 9, 2, 1.5, 2, 1.5]
        },
        title: 'A Typical Day in My Life (Hours)',
        titleFontSize: '1.2rem',
        colors: ['#fbbf24', '#f472b6', '#60a5fa', '#34d399', '#f87171', '#a78bfa'],
        roughness: 2,
        strokeWidth: 1,
        fillWeight: 0.5,
        highlight: 'coral',
        interactive: true,
        legend: true,
        legendPosition: 'right',
        width: 550,
        height: 350,
        margin: {top: 50, right: 150, bottom: 50, left: 50}
      });
    
      console.log('✅ RoughViz pie chart created successfully');
    
    } catch (error) {
      console.error('❌ Error creating RoughViz chart:', error);
    
      // Fallback content
      document.getElementById('vis0').innerHTML = `
        <div style="text-align: center; padding: 2rem; border: 2px dashed #ccc; border-radius: 8px; background-color: #f9f9f9;">
          <h3 style="color: #333; margin-bottom: 1rem;">📊 A Typical Day in My Life (Hours)</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; max-width: 500px; margin: 0 auto;">
            <div style="padding: 0.5rem; background: #fbbf24; border-radius: 4px; color: white; font-weight: bold;">🛌 Sleep: 8h (33%)</div>
            <div style="padding: 0.5rem; background: #f472b6; border-radius: 4px; color: white; font-weight: bold;">💼 Work: 9h (38%)</div>
            <div style="padding: 0.5rem; background: #60a5fa; border-radius: 4px; color: white; font-weight: bold;">🍽️ Eat: 2h (8%)</div>
            <div style="padding: 0.5rem; background: #34d399; border-radius: 4px; color: white; font-weight: bold;">📚 Read: 1.5h (6%)</div>
            <div style="padding: 0.5rem; background: #f87171; border-radius: 4px; color: white; font-weight: bold;">🎸 Code/Guitar: 2h (8%)</div>
            <div style="padding: 0.5rem; background: #a78bfa; border-radius: 4px; color: white; font-weight: bold;">🎮 Games: 1.5h (6%)</div>
          </div>
          <p style="color: #666; font-style: italic; margin-top: 1rem;">Interactive chart failed to load - showing static version</p>
        </div>
      `;
    }
  }, 500); // Reduced timeout since we're only loading one library
});
</script>

[^1]: [Why write?](https://fallinginenigma.github.io/building-the-blog/)

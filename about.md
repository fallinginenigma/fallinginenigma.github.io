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

<div style="width: 500px; height: 400px; margin: 2em auto;">
  <canvas id="about-piechart" width="500" height="400"></canvas>
  <noscript>
    <div style="text-align: center; padding: 2rem; border: 2px solid #ccc; border-radius: 8px;">
      <h3>A Typical Day in My Life (Hours)</h3>
      <ul style="list-style: none; padding: 0;">
        <li>🛌 Sleep: 8 hours (33%)</li>
        <li>💼 Work (Logistics, GPS, Dispatch): 9 hours (38%)</li>
        <li>🍽️ Eat: 2 hours (8%)</li>
        <li>📚 Read: 1.5 hours (6%)</li>
        <li>🎸 Play Guitar / Code / Build: 2 hours (8%)</li>
        <li>🎮 Games / Relax: 1.5 hours (6%)</li>
      </ul>
      <p><em>Enable JavaScript to see the interactive pie chart</em></p>
    </div>
  </noscript>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('about-piechart');
  
  if (ctx) {
    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'Sleep', 
          'Work (Logistics, GPS, Dispatch)', 
          'Eat', 
          'Read', 
          'Play Guitar / Code / Build', 
          'Games / Relax'
        ],
        datasets: [{
          data: [8, 9, 2, 1.5, 2, 1.5],
          backgroundColor: [
            '#fbbf24', // Sleep - Amber
            '#f472b6', // Work - Pink  
            '#60a5fa', // Eat - Blue
            '#34d399', // Read - Green
            '#f87171', // Code/Guitar - Red
            '#a78bfa'  // Games - Purple
          ],
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'A Typical Day in My Life (Hours)',
            font: {
              size: 18,
              weight: 'bold'
            },
            padding: 20
          },
          legend: {
            position: 'bottom',
            labels: {
              padding: 20,
              usePointStyle: true
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.parsed || 0;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = Math.round((value / total) * 100);
                return `${label}: ${value} hours (${percentage}%)`;
              }
            }
          }
        },
        animation: {
          animateRotate: true,
          animateScale: true
        }
      }
    });
  } else {
    console.error('Canvas element not found');
  }
});
</script>

What gives me immense pleasure? To crush my enemies, to see them driven before me, and to hear the lamentations of their women. [^2]

Just kidding. I like to relax while watching anime, sit-coms (i like laughing) and building things. I like solving puzzles and problems, talking about ideas, the stars and art. And I want to write about these on `Move 37`, my Blog. 

I also like reading:
- wisdom from kind people on the internet
- weird facts like these: Peeling a Post-It® from the [side](https://tylercipriani.com/blog/2022/05/28/on-the-proper-use-of-post-its/) - and it won't curl up when stuck on surfaces.
- And books

What I am doing these days? [click here](https://fallinginenigma.github.io/current/)

[^2]: [Part 2, Chapter XI of "Genghis Khan The Emperor Of All Men" by H. Lamb (1936)](https://archive.org/details/genghiskhantheem035122mbp/page/n115/mode/2up)

require(['gitbook'], function(gitbook) {
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
      processEscapes: true,

      CommonHTML: { linebreaks: { automatic: true } },
      'HTML-CSS': { linebreaks: { automatic: true } },
      SVG: { linebreaks: { automatic: true } },
    },
  });

  gitbook.events.bind('page.change', function() {
    MathJax.Hub.Typeset();
  });
});

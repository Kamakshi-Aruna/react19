import { Suspense, useState, useEffect } from "react";
import './foo.css';
import './bar.css';
// Component One that uses stylesheets with different precedence
function ComponentOne() {
  return (
    <Suspense fallback={<div>Loading styles...</div>}>
      {/* Precedence control: "high" for bar.css and "default" for foo.css */}
      <link rel="stylesheet" href="foo.css" precedence="default" />
      <Article />
    </Suspense>
  );
}

// Article component that will render content styled by foo.css and bar.css
function Article() {
  return (
    <article className="foo-class bar-class">
      <h1>Article Title</h1>
      <p>This is an article styled with multiple stylesheets.</p>
    </article>
  );
}

// Component Two demonstrating additional styling
function ComponentTwo() {
  return (
    <div>
      <p>Second component content</p>
      <link rel="stylesheet" href="baz.css" precedence="default" />
    </div>
  );
}

// Component that handles dynamic loading of stylesheets
function DynamicComponent() {
  const [style, setStyle] = useState(null);

  useEffect(() => {
    // Dynamically change the stylesheet on some event (e.g., user action)
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'dynamic-styles.css';
    stylesheet.setAttribute('data-precedence', 'high');
    document.head.appendChild(stylesheet);
    setStyle(stylesheet);

    return () => {
      // Clean up by removing the dynamically added stylesheet
      if (style) {
        document.head.removeChild(style);
      }
    };
  }, [style]);

  return (
    <div>
      <p>Dynamic Component with loaded styles</p>
    </div>
  );
}

export default ComponentOne;

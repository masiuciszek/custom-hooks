import * as React from "react";

export default () => {
  React.useLayoutEffect(() => {
    const original = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    // Cleanup
    // runs when component ore the hook is unmounted
    return () => {
      document.body.style.overflow = original;
      document.body.style.overflow = "visible";
    };
  }, []);
};

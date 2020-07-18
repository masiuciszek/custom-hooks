import * as React from "react";

function useWindowHeight(): number {
  const windowHeight = typeof window === "object" ? window.innerHeight : 100;
  const [height, setHeight] = React.useState(windowHeight);

  const handleHeight = (): void => {
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleHeight);

    return () => {
      // Cleanup Remove our event listener (unmunting)
      window.removeEventListener("resize", handleHeight);
    };
  });

  return height;
}

export default useWindowHeight;

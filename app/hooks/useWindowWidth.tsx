import * as React from "react";

const useWindowWidth = (): number => {
  const windowWidth = typeof window === "object" ? window.innerWidth : 100;
  const [width, setWidth] = React.useState<number>(windowWidth);

  React.useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    // Cleanup Remove our event listener (unmunting)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
};

export default useWindowWidth;

import * as React from "react";
import ResizeObserver from "resize-observer-polyfill";

interface Bound {
  left: number;
  top: number;
  width: number;
  height: number;
}

const useMeasure = () => {
  const ref = React.useRef();

  const [bounds, setBounds] = React.useState<Bound>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const [resizeX] = React.useState(() => {
    return new ResizeObserver(([entry]) => setBounds(entry.contentRect));
  });

  React.useEffect(() => {
    if (ref.current) {
      resizeX.observe(ref.current);
    }
    return () => {
      return resizeX.disconnect();
    };
  }, [resizeX]);

  return [{ ref }, bounds];
};

export default useMeasure;

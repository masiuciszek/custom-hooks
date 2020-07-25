import * as React from "react";
import elementResizeEvent from "element-resize-event";

interface Size {
  height: number;
  width: number;
}

type UseSizeReturnType = [Size, React.MutableRefObject<null>];

const useSize = (defaultSize: Size): UseSizeReturnType => {
  const wrappedRef = React.useRef<null>(null);
  const [size, setSize] = React.useState<Size>(defaultSize);

  React.useEffect(() => {
    const updatedSize = () => {
      const element: HTMLElement = wrappedRef.current;

      setSize({
        height: element.clientHeight,
        width: element.clientWidth,
      });
    };

    const element: HTMLElement = wrappedRef.current;
    updatedSize();
    elementResizeEvent(element, updatedSize);

    // Cleanup
    return () => elementResizeEvent.unbind(wrappedRef.current);
  }, []);

  return [size, wrappedRef];
};
export default useSize;

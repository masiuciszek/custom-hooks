import * as React from "react";
import useToggle from "./useToggle";

type ReturnHoveredHookType = [boolean, BindType];

export default (): ReturnHoveredHookType => {
  // const [isHovered, setIsHovered] = React.useState(false);
  const [isHovered, toggle] = useToggle();
  const bind = React.useMemo(() => {
    return {
      onMouseOver: () => toggle(),
      onMouseLeave: () => toggle(),
    };
  }, []);

  return [isHovered, bind];
};

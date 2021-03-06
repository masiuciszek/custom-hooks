interface NavLink {
  text: string;
  path: string;
}

interface ApiResponse<T> {
  msg: string;
  data?: Array<T>;
}

type Fn = () => void;

type BindType = {
  onMouseOver: Fn;
  onMouseLeave: Fn;
};

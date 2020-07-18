import * as React from "react";

interface Status {
  loaded: boolean;
  error: boolean;
}

type UseScriptReturn = [boolean, boolean];

const useScript = (src: string): UseScriptReturn => {
  const cached = [];

  const [status, setStatus] = React.useState<Status>({
    loaded: false,
    error: false,
  });

  React.useEffect(() => {
    // if script already exits then ....
    if (cached.includes(src)) {
      setStatus({
        loaded: true,
        error: false,
      });
    } else {
      cached.push(src);

      const script = document.createElement("script");
      script.src = src;
      // for not blocking
      script.async = true;

      const onLoad = () => {
        setStatus({
          loaded: true,
          error: false,
        });
      };

      const onError = () => {
        const srcIndex = cached.indexOf(src);
        if (srcIndex >= 0) {
          cached.splice(srcIndex, 1);
        }

        // destroy
        script.remove();
        setStatus({
          loaded: true,
          error: true,
        });
      };
      script.addEventListener("load", onLoad);
      script.addEventListener("error", onError);

      document.body.appendChild(script);
      return () => {
        script.removeEventListener("load", onLoad);
        script.removeEventListener("error", onError);
      };
    }
  }, [src]);

  return [status.loaded, status.error];
};

export default useScript;

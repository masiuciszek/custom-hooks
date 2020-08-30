import * as React from "react";
import axios from "axios";
function useQuote() {
  const [quote, setQuote] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const getQuote = async () => {
      setIsLoading(true);
      const res = await axios.get(
        "https://starwars-quote-proxy-gi0d3x1lz.now.sh/api/randomQuote"
      );
      const data = await res.data;
      const quote = data.starWarsQuote;
      setQuote(quote);
      setIsLoading(false);
    };
    getQuote();
  }, []);

  return { quote, isLoading };
}

export default useQuote;

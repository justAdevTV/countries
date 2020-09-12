import { Countries as CountriesTemplate } from "../templates";
import { useFetchCountries } from "../api";

// Main Page
function Home() {
  const { countries, isLoading, hasError } = useFetchCountries();
  // console.log({ countries, isLoading });
  return <CountriesTemplate></CountriesTemplate>;
}

export default Home;

import { useFetchCountries } from "../api";

// Main Page
function Home() {
  const { countries, isLoading, hasError } = useFetchCountries();
  console.log({ countries, isLoading });
  return "This is the start of something great!";
}

export default Home;

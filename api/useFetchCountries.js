import { useEffect, useState } from "react";

// Url for Country API Endpoint
const baseUrl = "https://restcountries.eu/rest/v2/all";

// Hook for fetching countries
// Returns {countries, hasError, isLoading,fetchCountries}
function useFetchCountries() {
  const [countries, setContries] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Run fetch on mount
  useEffect(() => {
    fetchCountries();
  }, []);

  // Fetches, parses, and sets country & isLoading data
  const fetchCountries = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      // Seet error if present and countries
      setHasError(!response.ok);
      setContries(data);

      // Stop loading
      if (data) setIsLoading(false);
    } catch (e) {
      // Stop loading and indicate error is present
      setHasError(true);
      setIsLoading(false);
      console.error(e);
    }
  };

  return { countries, hasError, isLoading, fetchCountries };
}

export default useFetchCountries;

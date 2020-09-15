import { Countries as CountriesTemplate } from "../templates";

// Main Page
function Home({ countries }) {
  console.log(countries);
  return <CountriesTemplate />;
}

export default Home;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  // By returning { props: countries }, the Blog component
  // will receive `countries` as a prop at build time
  return {
    props: {
      countries,
    },
  };
}

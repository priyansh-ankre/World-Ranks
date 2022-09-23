import Layout from '../components/Layout/Layout'
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function Home ({countries}) {
  console.log(countries);
  return (
    <Layout className={styles.counts}>
      <div>Found {countries.length} countries</div>
      <SearchInput placeholder = 'Filter by Name, Region or SubRegion'  />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(
    'https://restcountries.com/v2/all');

// Parse the JSON
  const data = await response.json();
  return {
    props: {
      countries : data
    }
  }
}

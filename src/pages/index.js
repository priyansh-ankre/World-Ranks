import { useState } from 'react'
import CountriesTable from '../components/CountriesTable/CountriesTable'
import Layout from '../components/Layout/Layout'
import SearchInput from '../components/SearchInput/SearchInput'
import styles from '../styles/Home.module.css'

export default function Home ({ countries }) {
  const [keyword, setKeyword] = useState('')

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  )

  const onInputChange = (e) => {
    e.preventDefault()

    setKeyword(e.target.value.toLowerCase().trim())
  }

  return (
    <Layout className={styles.counts}>
      <div>Found {countries.length} countries</div>
      <SearchInput placeholder='Filter by Name, Region or SubRegion' onChange={onInputChange} />
      <CountriesTable countries={filteredCountries} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(
    'https://restcountries.com/v2/all')

  // Parse the JSON
  const data = await response.json()
  return {
    props: {
      countries: data
    }
  }
}

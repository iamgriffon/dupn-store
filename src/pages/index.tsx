import type { NextPage } from 'next'
import { CategoryMenu } from '../components/category-menu'
import { CollectionPreview } from '../components/collection-preview'
import { Header } from '../components/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.homePageContainer}>
      <Header />
      <CollectionPreview />
    </div>
  )
}

export default Home

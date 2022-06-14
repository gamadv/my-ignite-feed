import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { PostItem } from "./components/PostItem"

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <PostItem />
        </main>
      </div>
    </div>
  )
}

export default App

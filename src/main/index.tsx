import { ASSETS_NAMES } from '../utils/constants'
import styles from './main.styles.module.css'

const Main = () => {
  return (
    <div>
      <header style={{backgroundColor: '#344152', padding: '10px'}}>
        <h1 style={{color: 'white', margin: 0}}>Status Dashboard</h1>
      </header>
      <section>
        <div className={styles.cardListContainer}>
          {
            ASSETS_NAMES.map(item => (
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{item}</h3>
                <p className={styles.apiStatus}>Healthy</p>
                <p className={styles.messageText}>message</p>
              </div>
            ))
          }
        </div>
        Content
      </section>
    </div>
  )
}

export default Main
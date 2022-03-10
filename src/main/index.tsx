import { Card } from '../components/card'
import { useApiContext } from '../context'

import styles from './main.styles.module.css'

const Main = () => {
  const {state}= useApiContext()

  return (
    <div>
      <header style={{backgroundColor: '#344152', padding: '10px'}}>
        <h1 style={{color: 'white', margin: 0}}>Status Dashboard</h1>
      </header>
      <section>
        <div className={styles.cardListContainer}>
          {
            state.results &&
            state.results.size > 0 &&
            Array.from(state.results.entries()).map(([key, value]) => (
              <Card apiInfo={value} key={key} title={key} />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Main
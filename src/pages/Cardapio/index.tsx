import React from 'react'
import styles from './Cardapio.module.scss'
// Transformar svg em componente
import {ReactComponent as Logo} from 'assets/logo.svg'

const Cardapio = () => {
  return (
    <main>
        <nav className={styles.menu}>
            <Logo />
        </nav>
    </main>
  )
}

export default Cardapio
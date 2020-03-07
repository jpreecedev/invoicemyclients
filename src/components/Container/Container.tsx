import React from 'react'
import clsx from 'clsx'

import styles from './styles.module.css'

const Container: React.FC = ({ children }) => {
  return <div className={clsx(styles.container, 'shadow-sm mb-5 rounded-lg')}>{children}</div>
}

export { Container }

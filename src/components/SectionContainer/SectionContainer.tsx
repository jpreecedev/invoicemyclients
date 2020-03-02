import React from 'react'
import clsx from 'clsx'

import styles from './styles.module.css'

interface SectionContainerProps {
  id: string
  title: string
  subtitle?: string
  sectionClassNames?: string
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  title,
  subtitle,
  sectionClassNames
}) => {
  return (
    <section id={id} className={clsx(styles.container, 'drop-shadow', sectionClassNames)}>
      <h2>
        {title}
        {subtitle && <div>{subtitle}</div>}
      </h2>

      {children}
    </section>
  )
}

export { SectionContainer }

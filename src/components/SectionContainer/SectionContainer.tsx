import React from 'react'
import clsx from 'clsx'

import styles from './styles.module.css'
import { HeaderSubheader, Header } from 'semantic-ui-react'

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
      <Header as="h2">
        {title}
        {subtitle && <HeaderSubheader>{subtitle}</HeaderSubheader>}
      </Header>

      {children}
    </section>
  )
}

export { SectionContainer }

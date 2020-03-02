import React from 'react'

interface DesktopNavBarProps {
  heading: React.ReactElement
}

const DesktopNavBar: React.FC<DesktopNavBarProps> = ({ children, heading }) => {
  return (
    <>
      <div>{heading}</div>
      <div>{children}</div>
    </>
  )
}

export { DesktopNavBar }

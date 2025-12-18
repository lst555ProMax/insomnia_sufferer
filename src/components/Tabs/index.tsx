import React, { useState } from 'react'
import styles from './Tabs.module.scss'

interface Tab {
  id: string
  label: string
}

interface TabsProps {
  tabs: Tab[]
  children: React.ReactNode[]
  defaultTab?: string
}

const Tabs: React.FC<TabsProps> = ({ tabs, children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id)

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab)

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabList}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {children[activeIndex]}
      </div>
    </div>
  )
}

export default Tabs


import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './ComparisonPage.module.scss'
import Tabs from '../../components/Tabs'
import originalMarkdown from '../../data/original.md?raw'
import qianwenMarkdown from '../../data/qianwen.md?raw'
import geminiMarkdown from '../../data/gemini.md?raw'
import kimiMarkdown from '../../data/kimi.md?raw'

const ComparisonPage: React.FC = () => {
  const tabs = [
    { id: 'original', label: '原始文章' },
    { id: 'qianwen', label: '千问 Deep Research' },
    { id: 'gemini', label: 'Gemini Deep Research' },
    { id: 'kimi', label: 'Kimi 文学性评价' },
  ]

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>失眠的文学重构：AI评价对比</h1>
        <p className={styles.prompt}>提示词为：你如何看待这段文字，请从文学性的角度给出客观的评价</p>
      </header>

      <main className={styles.main}>
        <Tabs tabs={tabs} defaultTab="original">
          <div className={styles.contentWrapper}>
            <ReactMarkdown 
              className={styles.markdownContent}
              remarkPlugins={[remarkGfm]}
            >
              {originalMarkdown}
            </ReactMarkdown>
          </div>
          <div className={styles.contentWrapper}>
            <ReactMarkdown 
              className={styles.markdownContent}
              remarkPlugins={[remarkGfm]}
            >
              {qianwenMarkdown}
            </ReactMarkdown>
          </div>
          <div className={styles.contentWrapper}>
            <ReactMarkdown 
              className={styles.markdownContent}
              remarkPlugins={[remarkGfm]}
            >
              {geminiMarkdown}
            </ReactMarkdown>
          </div>
          <div className={styles.contentWrapper}>
            <ReactMarkdown 
              className={styles.markdownContent}
              remarkPlugins={[remarkGfm]}
            >
              {kimiMarkdown}
            </ReactMarkdown>
          </div>
        </Tabs>
      </main>
    </div>
  )
}

export default ComparisonPage


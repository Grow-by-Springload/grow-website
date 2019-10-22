import React from "react"
import * as styles from "../../Index.module.scss"

const FAQ = (item, index) => {
  return (
    <div className={styles.gridItemContainer} key={index}>
      <div className={styles.headingSmall}>{item.question}</div>
      <div className={styles.paragraphSmall}>
        <p>{item.answer}</p>
      </div>
    </div>
  )
}

export default FAQ

import React from "react"
import * as styles from "../../Index.module.scss"

const Person = (person, index) => {
  return (
    <div className={styles.gridItemContainer} key={index}>
      <div className={styles.gridItem}>
        <div className={styles.ratioContent}>
          <img src={person.imageSrc} className={styles.gridImage} alt="" />
        </div>
      </div>
      <div className={styles.headingSmall}>{person.name}</div>
      <p className={styles.paragraphSmall}>{person.description}</p>
    </div>
  )
}

export default Person

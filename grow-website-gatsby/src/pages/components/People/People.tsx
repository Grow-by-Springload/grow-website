import React from "react"
import * as styles from "../../Index.module.scss"

import PeopleData from "./PeopleData"
import Person from "./Person"

const People = () => {
  return (
    <>
      <div id="people" className={styles.headingLarge}>
        People
      </div>
      <div className={styles.uMarginBottomML}>
        <div className={styles.uWidthSixtyPercent}>
          {PeopleData.description.map((paragraph, index) => {
            return (
              <p className={styles.paragraphSmall} key={index}>
                {paragraph}
              </p>
            )
          })}
        </div>
      </div>
      <div className={styles.uMarginBottomL}>
        <div className={styles.grid}>
          {PeopleData.people.map((person, index) => {
            return <Person person={person} index={index} />
          })}
        </div>
      </div>
    </>
  )
}

export default People

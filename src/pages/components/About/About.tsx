import * as React from "react"
import * as styles from "../../Index.module.scss"

const About = () => {
  return (
    <div className={styles.aboutSection} id="about">
      <div className={styles.aboutHeader}>
        <h1 className={styles.aboutHeading}>
          Growing a more diverse tech sector
        </h1>
      </div>
      <p className={`${styles.uWidthEightyPercent} ${styles.paragraphLarge}`}>
        Grow offers free workshops to help Māori, women, and gender minorities
        learn the basics of web development. If you have little or no experience
        in coding, Grow provides a safe space for you to discover where you
        could go in tech. Get a feel for the languages used in front-end web
        development and learn about the next steps you could take on your coding
        journey.
      </p>
    </div>
  )
}

export default About

import * as React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import * as styles from "../../Index.module.scss"

const Footer = () => {
    return
    <div className={styles.gutters}>
        <div className={styles.footerLinkContainer}>
            <AnchorLink className={styles.footerLink} href="#about">
                About
            </AnchorLink>
            <AnchorLink className={styles.footerLink} href="#workshop">
                Workshops
            </AnchorLink>
            <AnchorLink className={styles.footerLink} href="#people">
                People
            </AnchorLink>
            <AnchorLink className={styles.footerLink} href="#faqs">
                FAQS
            </AnchorLink>
            <AnchorLink className={styles.footerLink} href="#contact">
                Contact
            </AnchorLink>
        </div>
    </div>
}

export default Footer 
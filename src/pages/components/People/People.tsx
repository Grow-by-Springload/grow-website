import React from "react"
import * as styles from "../../Index.module.scss"

import alexaImage from "../../../images/alexa-Normal.jpg"
import alexaFunImage from "../../../images/alexa-Fun.jpg"

import cateImage from "../../../images/cate-Normal.jpg"
import cateFunImage from "../../../images/cate-Fun.jpg"

import giselaImage from "../../../images/gisela-Normal.jpg"
import giselaFunImage from "../../../images/gisela-Fun.jpg"

import julietImage from "../../../images/juliet-Normal.jpg"
import julietFunImage from "../../../images/juliet-Fun.jpg"

import kellyImage from "../../../images/kelly-Normal.jpg"
import kellyFunImage from "../../../images/kelly-Fun.jpg"

import liamImage from "../../../images/liam-Normal.jpg"
import liamFunImage from "../../../images/liam-Fun.jpg"

import piaImage from "../../../images/pia-Normal.jpg"
import piaFunImage from "../../../images/pia-Fun.jpg"

const PeopleData = {
  description: [
    {
      one:
        "We’re the dedicated, approachable, and welcoming team behind Grow. We all work at Springload and we all want to make learning the basics of web development as fun and accessible as we can for you.",
      two:
        "Not all of us code (but most of us do). And not all of us knew that tech was where we wanted to end up. Some of us came from non-coding backgrounds: graphic design, fine art, creative writing, clock repairing, cabinet making, and photography.",
    },
  ],
  people: [
    {
      url: "https://www.springload.co.nz/people/kelly-todd/",
      name: "Kelly Todd",
      imageSrc: kellyImage,
      imageSrcTwo: kellyFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/gisela-de-la-villa/",
      name: "Gisela de la Villa",
      imageSrc: giselaImage,
      imageSrcTwo: giselaFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/cate-palmer/",
      name: "Cate Palmer",
      imageSrc: cateImage,
      imageSrcTwo: cateFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/juliet-brown/",
      name: "Juliet Brown",
      imageSrc: julietImage,
      imageSrcTwo: julietFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/alexa-patterson/",
      name: "Alexa Patterson",
      imageSrc: alexaImage,
      imageSrcTwo: alexaFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/pia-steiner/",
      name: "Pia Steiner",
      imageSrc: piaImage,
      imageSrcTwo: piaFunImage,
    },
    {
      url: "https://www.springload.co.nz/people/liam-johnston/",
      name: "Liam Johnston",
      imageSrc: liamImage,
      imageSrcTwo: liamFunImage,
    },
  ],
}

const People = () => {
  return (
    <>
      <div className={styles.gutters}>
        <h2 className={styles.uMarginBottomSM} id="people">
          People
        </h2>
        <div className={styles.uMarginBottomML}>
          <div className={styles.uWidthSixtyPercent}>
            {PeopleData.description.map((paragraph, i) => {
              return (
                <div key={i}>
                  <div
                    className={`${styles.uMarginBottomSM} ${styles.paragraphSmall}`}
                  >
                    <p className={styles.paragraphSmall}>{paragraph.one}</p>
                  </div>
                  <p className={styles.paragraphSmall}>{paragraph.two}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className={styles.uMarginBottomL}>
        <div className={styles.gridPeople}>
          <div className={styles.peopleContainer}>
            {PeopleData.people.map((person, i) => {
              return (
                <a key={i} href={person.url} aria-labelledby={person.name}>
                  <img
                    src={person.imageSrc}
                    onMouseOver={(e) =>
                      (e.currentTarget.src = person.imageSrcTwo)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.src = person.imageSrc)
                    }
                    className={styles.peopleImage}
                    alt=""
                  />
                  <div className={styles.smallGutters}>
                    <div className={styles.headingSmall}>{person.name}</div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default People

import React from "react";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import ContactList from '../../../data/contacts';
import clsx from "clsx";
import styles from './styles.module.scss';

// Code by https://github.com/pkosiec
export default function ContactButtons () {
    const contactButtons = ContactList.map(({ name, link, svg }) => (
      <div className={clsx("col", styles.col)} key={name}>
        <Link
          href={link}
          target="_blank"
          className={clsx("button button--outline button--primary", styles.btn)}
        >
          <span className={styles.btnIcon}>{svg}</span>
          <span className={styles.btnText}>{name}</span>
        </Link>
      </div>
    ));
  
    return (
      <div className={styles.socialContainer}>
        <div className={clsx("row", styles.socialLinks)}>
          {contactButtons}
        </div>
      </div>
    );
  };
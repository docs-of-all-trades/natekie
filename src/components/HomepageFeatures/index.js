import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Unlock Banking excellence',
    Svg: require('@site/static/img/collage-bank.svg').default,
    description: (
      <>
        Seamless integration & unparalleled efficiency for financial institutions globally.
      </>
    ),
  },
  {
    title: 'Boost your ecosystem via APIs',
    Svg: require('@site/static/img/collage-bank.svg').default,
    description: (
      <>
        Real-time data and secure solutions for transformative banking experiences.
      </>
    ),
  },
  {
    title: 'Enable Digital Banking',
    Svg: require('@site/static/img/collage-bank.svg').default,
    description: (
      <>
        Transform Banking with our Developer Ecosystem.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

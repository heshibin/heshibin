import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '',
    // Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: '',
    // Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        成功需要成本，时间也是一种成本，
        对时间的珍惜就是对成本的节约。
      </>
    ),
  },
  {
    title: '',
    // Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p style={{fontFamily: 'cursive'}}>{description}</p>
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

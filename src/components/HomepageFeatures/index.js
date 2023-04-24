import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '多云、多区域的云数据库服务提供者',
    illustration: 'img/database.png',
    description: (
      <>
        Atlas支持将您的应用部署到AWS、Azure和Google Cloud上的多个区域的多个云平台上。目前，Atlas已经支持全球超过100个公有云Region。
      </>
    ),
  },
  {
    title: '完全集成的开发者数据平台',
    illustration: 'img/app-services.png',
    description: (
      <>
        Atlas提供完全托管的云服务，包括函数、触发器和API等。开发者只需要花费很少的时间，即可在Atlas上构建并运行生产级应用程序。
      </>
    ),
  },
  {
    title: '支持任何语言或开发框架',
    illustration: 'img/analytics.png',
    description: (
      <>
        利用包括Node.js、Java、Python和Go在内的数十种驱动程序和语言的丰富查询API。
      </>
    ),
  },
];

function Feature({illustration, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={illustration} className={styles.featureImg} role="img" />
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

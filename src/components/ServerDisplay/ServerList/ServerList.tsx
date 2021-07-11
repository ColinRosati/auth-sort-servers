import React, { FC } from 'react';

import { ServerListProps } from './types';
import styles from './ServerList.module.scss';

const ServerList: FC<ServerListProps> = ({ servers }) => (
  <section className={styles.serverWrapper}>
    <div className={styles.listTitle}>
      <h2>Name</h2>
      <h2>Distance</h2>
    </div>
    <ul className={styles.listContainer}>
      {servers && servers.length ? (
        servers.map((server, index) => (
          <li className={styles.listItem} key={`${server.name}-${index}`}>
            <h4>{server.name}</h4>
            <h4>{server.distance}</h4>
          </li>
        ))
      ) : (
        <h3 className={styles.emptyList}>No results 🕵🏻‍♀️</h3>
      )}
    </ul>
  </section>
);

export default ServerList;

import React, { FC } from 'react';

import { ASCENDING_PROXIMITY, DESCENDING_PROXIMITY } from 'constants/proximity';
import {
  proximitySort,
  filterByInput,
} from 'components/ServerDisplay/sortUtilities';
import { InputElementValue } from 'components/Authorization/types';

import { SearchBarProps } from './types';
import styles from './SearchBar.module.scss';

const SearchBar: FC<SearchBarProps> = ({
  setSortedServer,
  sortedServers,
  servers,
  setProximity,
  proximity,
}) => {
  const handleChangeSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    const { value } = event.target as InputElementValue;

    setProximity(value);
    event.preventDefault();
  };

  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.target as InputElementValue;

    if (value === '') {
      setSortedServer(servers);
      return;
    }

    const filteredMatch = filterByInput(value, sortedServers);
    setSortedServer(proximitySort(filteredMatch, proximity));

    event.preventDefault();
  };

  return (
    <section className={styles.searchBarWrapper}>
      <input className={styles.input} onChange={handleChangeInput} />
      <select className={styles.proximitySelect} onChange={handleChangeSelect}>
        <option value={DESCENDING_PROXIMITY}>Closest</option>
        <option value={ASCENDING_PROXIMITY}>Furthest</option>
      </select>
    </section>
  );
};

export default SearchBar;

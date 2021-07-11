import React, { FC, useEffect } from 'react';

import { sort } from 'components/ServerDisplay/sortUtilities';
import { InputElementValue } from 'components/Authorization/types';

import { SearchBarProps } from './types';
import styles from './SearchBar.module.scss';

export const SearchBar: FC<SearchBarProps> = ({
  setSortedServer,
  sortedServers,
  servers,
  setProximity,
  proximity,
}) => {
  const handleChangeSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    const { value } = event.target as InputElementValue;
    if (proximity === value) {
      setProximity('');
    }

    setProximity(value);
    event.preventDefault();
  };

  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.target as InputElementValue;

    if (value === '') {
      setSortedServer(servers);
      return;
    }

    const sorted = sort(value, sortedServers);
    setSortedServer(sorted);
    event.preventDefault();
  };

  useEffect(() => {
    if (!sortedServers?.length) {
      setSortedServer(servers);
    }
    setProximity('ascending');
  }, []);

  return (
    <section className={styles.searchBarWrapper}>
      <input className={styles.input} onChange={handleChangeInput} />
      <select className={styles.proximitySelect} onChange={handleChangeSelect}>
        <option value='descending'>Closest</option>
        <option value='ascending'>Furthest</option>
      </select>
    </section>
  );
};

export default SearchBar;

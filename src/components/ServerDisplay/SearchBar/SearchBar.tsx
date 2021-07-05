import React, { FC, useEffect } from 'react';

import { sort } from 'components/ServerDisplay/logic';

import { SearchBarProps } from './types';
import styles from './SearchBar.module.scss'

export const SearchBar: FC<SearchBarProps> = ({setSortedServer, sortedServers, servers, setProximity, proximity}) => {
   const handleChangeSelect = (event: React.FormEvent<HTMLSelectElement>) => {
     const select = (event.target as any).value
     console.log(proximity, select, event)
     if(proximity === select){
      setProximity('')
     }
     
      setProximity(select);
      event.stopPropagation();
    };

  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    const input = (event.target as any).value;
    
    if(input === ''){
      setSortedServer(servers!);
      return;
    }

    const sorted = sort(input, sortedServers);
    setSortedServer(sorted!);
    event.stopPropagation();
  }
  

  useEffect(() => {
    if(!sortedServers.length){
      setSortedServer(servers!)
    }
    setProximity('ascending')
    // eslint-disable-next-line
  }, [])

  return (
    <section className={styles.searchBarWrapper}>
      <input className={styles.input} onChange={handleChangeInput}/>
      <select className={styles.proximitySelect} onChange={handleChangeSelect}>
        <option value="descending">Closest</option>
        <option value="ascending">Furthest</option>
      </select>
    </section>
  )
}

export default SearchBar;
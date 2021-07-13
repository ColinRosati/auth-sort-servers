import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import FullpageLayout from 'components/layout/FullpageLayout/FullpageLayout';
import { useAppSelector } from 'store/hooks';
import { Servers } from 'store/servers/types';
import { DESCENDING_PROXIMITY } from 'constants/proximity';
import getServers from 'store/servers/thunks';

import ServerList from './ServerList/ServerList';

import { proximitySort } from './sortUtilities';
import SearchBar from './SearchBar/SearchBar';

const ServerDisplay = (): ReactElement => {
  const dispatch = useDispatch();
  const token = useAppSelector((state) => state.tokens?.token);
  const servers: Servers | null = useAppSelector(
    (state) => state.servers?.data,
  );

  const [sortedServers, setSortedServer] = useState<Servers | null>(servers);
  const [proximity, setProximity] = useState<string>(DESCENDING_PROXIMITY);

  useEffect(() => {
    dispatch(getServers(token as string));
  }, []);

  useEffect(() => {
    if (!sortedServers?.length) {
      setSortedServer(servers);
    } else {
      setSortedServer(proximitySort(sortedServers, proximity));
    }
  }, [servers, proximity]);

  return (
    <FullpageLayout>
      <h2>Display</h2>
      <SearchBar
        proximity={proximity}
        setSortedServer={setSortedServer}
        servers={servers}
        setProximity={setProximity}
        sortedServers={sortedServers}
      />
      <ServerList servers={sortedServers} />
    </FullpageLayout>
  );
};

export default ServerDisplay;

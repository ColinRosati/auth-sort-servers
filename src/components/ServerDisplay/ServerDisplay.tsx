import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import FullpageLayout from "components/layout/FullpageLayout/FullpageLayout";
import { useAppSelector } from "store/hooks";
import { Servers } from "store/servers/types";
import { getServers } from "store/servers/thunks";

import ServerList from "./ServerList/ServerList";

import { proximitySort } from './logic';
import SearchBar from './SearchBar/SearchBar';

const ServerDisplay = (): ReactElement => {
  const dispatch = useDispatch()
  const token: string = useAppSelector(state => state.tokens?.token)
  const servers: Servers = useAppSelector(state => state.servers?.data!)
  const [sortedServers, setSortedServer] = useState<Servers>(servers!);
  const [proximity, setProximity] = useState<string>('')

  const sortServers = (serversToSort: Servers, proximity: string) => setSortedServer(proximitySort(proximity, serversToSort));

  useEffect(() => {
    sortServers(sortedServers, proximity)
    // eslint-disable-next-line
  },[proximity])

  useEffect(() => {
    if(servers){
      setSortedServer(servers);
    }
    // eslint-disable-next-line
  }, [servers])

  useEffect(() => {
    dispatch(getServers(token));
    // eslint-disable-next-line
  }, [])

  
  return (
    <FullpageLayout>
      <h2>Display</h2>
      <SearchBar proximity={proximity} setSortedServer={setSortedServer} servers={servers!} setProximity={setProximity} sortedServers={sortedServers}/>
      <ServerList servers={sortedServers}/>
    </FullpageLayout>
  )};

export default ServerDisplay;
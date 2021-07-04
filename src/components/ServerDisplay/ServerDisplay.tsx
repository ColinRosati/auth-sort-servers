import React, { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";

import FullpageLayout from "components/layout/FullpageLayout/FullpageLayout";
import { useAppSelector } from "store/hooks";
import { Servers } from "store/servers/types";
import { getServers } from "store/servers/thunks";

import ServerList from "./ServerList/ServerList";

const ServerDisplay = (): ReactElement => {
  const dispatch = useDispatch()
  const token: string = useAppSelector(state => state.tokens?.token)
  const servers: Servers = useAppSelector(state => state.servers?.data!)

  useEffect(() => {
    dispatch(getServers(token))
    // eslint-disable-next-line
  }, [])

  
  return (
    <FullpageLayout>
      <h2>Servers</h2>
      <ServerList servers={servers}/>
    </FullpageLayout>
  )};

export default ServerDisplay;
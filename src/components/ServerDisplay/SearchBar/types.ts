import { SetStateAction } from 'react';
import { Servers } from 'store/servers/types';

export type SearchBarProps = {
  proximity: string;
  setSortedServer: (prevState: Servers | null) => void;
  sortedServers: Servers | null;
  servers: Servers | null;
  setProximity: (prevState: SetStateAction<string>) => void;
};

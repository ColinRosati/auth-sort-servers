import { Servers } from "store/servers/types";

export type SearchBarProps = {
  proximity: string;
  setSortedServer: React.Dispatch<React.SetStateAction<Servers>>
  sortedServers: Servers;
  servers: Servers;
  setProximity: React.Dispatch<React.SetStateAction<string>>
}
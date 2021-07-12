export type Server = {
  name: string;
  distance: number;
};

export type Servers = Server[];

export type InitialState = {
  data: Servers | null;
  hasError: boolean;
};

export type GetServersSuccessPayload = Servers;

export type ServerState = InitialState;

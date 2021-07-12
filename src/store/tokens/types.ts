export type InitialState = {
  token: null | string;
  hasError: boolean;
  hasToken: boolean;
};

export type PostTokensSuccessPayload = string;

export type TokensState = InitialState;

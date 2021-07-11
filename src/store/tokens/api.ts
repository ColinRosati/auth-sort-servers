import { FeildsState } from 'components/Authorization/types';

export const apiPostTokens = (payload: FeildsState): string => `https://playground.tesonet.lt/v1/tokens?username=${payload.email}&password=${payload.password}`;

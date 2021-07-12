import { DESCENDING_PROXIMITY } from 'constants/proximity';
import { Servers } from 'store/servers/types';

export const filterByInput = (input: string, results: Servers | null): Servers => {
  if (!input || input === '' || !results?.length) {
    return [];
  }

  let sorted: Servers = [];
  if (input) {
    sorted = Array.from(
      new Set(
        results
          .filter((x) => (
            x.name.toLowerCase() !== input.toLowerCase()
            && x.name.toLowerCase().startsWith(input.toLowerCase())
          ))
          .sort((a, b) => {
            if (a > b) {
              return 1;
            }
            if (a < b) {
              return -1;
            }
            return 0;
          }),
      ),
    );
  }

  return sorted;
};

export const proximitySort = (
  serversToSort: Servers | null,
  proximity = DESCENDING_PROXIMITY,
): Servers => {
  if (!serversToSort?.length) {
    return [];
  }

  return proximity === DESCENDING_PROXIMITY
    ? serversToSort.sort((a, b) => (a.distance > b.distance ? -1 : 1))
    : serversToSort.sort((a, b) => (a.distance < b.distance ? -1 : 1));
};

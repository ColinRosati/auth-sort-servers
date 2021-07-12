import { proximitySort, filterByInput } from './sortUtilities';
import SERVERS from 'constants/servers_success.json';
import { ASCENDING_PROXIMITY, DESCENDING_PROXIMITY } from 'constants/proximity';

describe('input search', () => {
  it('will sort with no input and return an array', () => {
    const actual = filterByInput('', SERVERS);
    expect(actual).toStrictEqual([]);
  });

  it('will sort with non-obvious input and return an array', () => {
    const actual = filterByInput('1', SERVERS);
    expect(actual).toStrictEqual([]);
    const actual2 = filterByInput('#`?.-@/\b/', SERVERS);
    expect(actual2).toStrictEqual([]);
  });

  it('will sort case insensitive input "j" and return an array with 5 items starting with letter "J"', () => {
    const actual = filterByInput('j', SERVERS);
    expect(actual?.length).toBe(6);
  });

  it('will sort input "Germany" and return 5 servers whose name matches item "Germany"', () => {
    const actual = filterByInput('Germany', SERVERS);
    expect(actual).toStrictEqual([
      {
        distance: 252,
        name: 'Germany #56',
      },
      {
        distance: 1978,
        name: 'Germany #89',
      },
      {
        distance: 1362,
        name: 'Germany #17',
      },
      {
        distance: 1053,
        name: 'Germany #63',
      },
      {
        distance: 12,
        name: 'Germany #75',
      },
      {
        distance: 627,
        name: 'Germany #88',
      },
    ]);
  });

  it('will sort input "b" and return array with 0 items starting with letter "b"', () => {
    const actual = filterByInput('b', SERVERS);
    expect(actual?.length).toBe(0);
  });

  it('will return array of matched servers', () => {
    const actual = filterByInput('a', SERVERS);
    expect(actual).toStrictEqual([]);
  });
});

describe('proximity search', () => {
  it('empty server lists will return empty array', () => {
    const proximity = ASCENDING_PROXIMITY;
    const actual = proximitySort([], proximity);
    expect(actual).toStrictEqual([]);
  });

  it('will sort elements with closest to furthest distance', () => {
    const proximity = ASCENDING_PROXIMITY;
    const sorted = filterByInput('Germany', SERVERS);
    const actual = proximitySort(sorted, proximity);
    const expected = [
      {
        distance: 12,
        name: 'Germany #75',
      },
      {
        distance: 252,
        name: 'Germany #56',
      },

      {
        distance: 627,
        name: 'Germany #88',
      },
      {
        distance: 1053,
        name: 'Germany #63',
      },
      {
        distance: 1362,
        name: 'Germany #17',
      },
      {
        distance: 1978,
        name: 'Germany #89',
      },
    ];
    expect(actual.length).toBe(6);
    expect(actual).toStrictEqual(expected);
  });

  it('will sort elements with furthest to closest distance', () => {
    const proximity = DESCENDING_PROXIMITY;
    const sorted = filterByInput('Germany', SERVERS);
    const actual = proximitySort(sorted, proximity);
    const expected = [
      {
        distance: 1978,
        name: 'Germany #89',
      },
      {
        distance: 1362,
        name: 'Germany #17',
      },
      {
        distance: 1053,
        name: 'Germany #63',
      },
      {
        distance: 627,
        name: 'Germany #88',
      },
      {
        distance: 252,
        name: 'Germany #56',
      },
      {
        distance: 12,
        name: 'Germany #75',
      },
    ];
    expect(actual.length).toBe(6);
    expect(actual).toStrictEqual(expected);
  });
});

import { proximitySort, sort } from './sortUtilities';
import SERVERS from 'constants/servers_success.json';

describe('input search', () => {
  it('will sort with no input and return an array', () => {
    const actual = sort('', SERVERS);
    expect(actual).toStrictEqual([]);
  });

  it('will sort with 'bad' input and return an array', () => {
    const actual = sort('1', SERVERS);
    expect(actual).toStrictEqual([]);
    const actual2 = sort('#`?.-@/\b/', SERVERS);
    expect(actual2).toStrictEqual([]);
  });

  it('will sort case insensitive input 'j' and return an array with 5 items starting with letter 'J'', () => {
    const actual = sort('j', SERVERS);
    expect(actual?.length).toBe(6);
  });

  it('will sort input 'Germany' and return 5 servers whose name matches item 'Germany'', () => {
    const actual = sort('Germany', SERVERS);
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

  it('will sort input 'b' and return array with 0 items starting with letter 'b'', () => {
    const actual = sort('b', SERVERS);
    expect(actual?.length).toBe(0);
  });

  it('will return array of matched servers', () => {
    const actual = sort('a', SERVERS);
    expect(actual).toStrictEqual([]);
  });
});

describe('proximity search', () => {
  it('empty server lists will return empty array', () => {
    const proximity = 'ascending';
    const actual = proximitySort(proximity, []);
    expect(actual).toStrictEqual([]);
  });

  it('ascending with sort elements with lowest to furthest distance', () => {
    const proximity = 'ascending';
    const sorted = sort('Germany', SERVERS);
    const actual = proximitySort(proximity, sorted);
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
});

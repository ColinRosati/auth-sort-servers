import { Servers } from "store/servers/types";

export const sort = (input: string, results: Servers): Servers => {
  if(!input || input === ''){
      return [];
  }

  let sorted: Servers = [];
  if(input){
      sorted = Array.from(new Set(results.filter(x => {
        return x.name.toLowerCase() !== input.toLowerCase() && x.name.toLowerCase().startsWith(input.toLowerCase())})
          .sort((a, b) => {
              if (a > b) {
                  return 1;
              }
              if (a < b) {
                  return -1;
              }
              return 0;
          })));
  }

  return sorted;
};

export const proximitySort = (proximity: string, serversToSort: Servers): Servers => {
  if(!serversToSort.length){
    return []
  }

  return proximity === 'descending' 
      ? serversToSort.sort((a,b) => a.distance > b.distance ? -1 : 1)
      : serversToSort.sort((a,b) => a.distance > b.distance ? 1 : -1);
}
import { ROOT_ENDPOINT } from "../config/config";

export const fetchBeerAPI = (food) => {
  const qs = food ? `?food=${food}` : "";
  const endpoint = `${ROOT_ENDPOINT}beers${qs}`;

  return fetch(endpoint).then((response) => response.json());
};

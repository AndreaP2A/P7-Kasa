import logements from "../data/logements.json";

/**
 * Fetch all houses.
 * @returns {Array} List of all houses.
 */
export const getAllHouses = () => {
  return logements;
};

/**
 * Fetch a house by its ID.
 * @param {string} id - The ID of the house.
 * @returns {Object|null} The house object if found, otherwise null.
 */
export const getHouseById = (id) => {
  return logements.find((logement) => logement.id === id) || null;
};

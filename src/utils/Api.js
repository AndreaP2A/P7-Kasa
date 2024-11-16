import logements from "../data/logements.json";

/**
 * Fetch all logements.
 * @returns {Array} List of all logements.
 */
export const getAllLogements = () => {
  return logements;
};

/**
 * Fetch a logement by its ID.
 * @param {string} id - The ID of the logement.
 * @returns {Object|null} The logement object if found, otherwise null.
 */
export const getLogementById = (id) => {
  return logements.find((logement) => logement.id === id) || null;
};

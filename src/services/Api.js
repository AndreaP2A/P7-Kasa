import logements from "../data/logements.json";
import collapseAboutData from "../data/collapse_about.json";

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

/**
 * Fetch all collapse data (About page).
 * @returns {Array} List of all collapse about data.
 */
export const getCollapseAboutData = () => {
  return collapseAboutData;
};

/**
 * Fetch the equipments and description of a house by its ID.
 * @param {string} id - The ID of the house.
 * @returns {Object|null} An object containing the equipments and description if found, otherwise null.
 */
export const getHouseDetailsById = (id) => {
  const house = getHouseById(id);
  if (house) {
    return {
      equipments: house.equipments,
      description: house.description,
    };
  }
  return null;
};

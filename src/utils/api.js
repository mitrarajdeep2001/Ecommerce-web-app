import axios from "axios";

// const params = {
//   headers: {
//     Authorization: "bearer " + process.env.REACT_APP_STRAPI_APP_KEY,
//   },
// };

export const fetchDataFromApi = async (endpoint) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_BASE_URL + endpoint
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

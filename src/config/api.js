import axios from "axios";

export const GQL = async value => {
  const { auth, query, mutation } = value;
  const token = localStorage.getItem("token");

  return await axios({
    method: "POST",
    url: "https://mejikacademy1588499516927.microgen.mejik.id/graphql",
    headers: auth ? { Authorization: `Bearer ${token}` } : {},
    data: query ? { query } : { mutation }
  });
};

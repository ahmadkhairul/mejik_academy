import axios from "axios";

export const GQL = async variable => {
  return await axios({
    method: "POST",
    url: "https://mejikacademy1588499516927.microgen.mejik.id/graphql",
    data: {
      query: variable
    }
  });
};

// export const setAuthToken = token => {
//   API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

// export const setToken = () => {
//   const send = localStorage.getItem("token");
//   setAuthToken(send);
// };

import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "../config/constants";
import { GQL } from "../config/api";

export const authUser = () => {
  return {
    type: AUTH_USER,
    payload: async () => {
      const string = `{
            user {
            id
            firstName
            lastName
            phoneNumber
            role
            }
        }`;

      const send = {
        auth: true,
        query: string
      };

      const res = await GQL(send);
      const data = res.data.data.user;
      return data;
    }
  };
};

export const loginUser = value => {
  return {
    type: LOGIN_USER,
    payload: async () => {
      const { email, password } = value;
      const string = `{
            login(input: { email: ${email}, password: ${password} }) {
              user {
                id
                firstName
                lastName
                phoneNumber
                role
              }
              token
            }
          }`;

      const send = {
        auth: false,
        mutation: string
      };

      console.log(send);
      const res = await GQL(send);
      const data = res.data.data.user;
      return data;
    }
  };
};

export const registerUser = user => {
  return {
    type: REGISTER_USER,
    payload: async () => {
      //   const string = `{
      //       courses(
      //         where: { title_contains: "${search}" }
      //       ) {
      //         id
      //         title
      //         cover
      //         description
      //       }
      //     }`;
      //   const res = await GQL(string);
      //   const data = res.data.data.courses;
      //   return data;
    }
  };
};

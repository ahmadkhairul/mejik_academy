import { GET_COURSE, INPUT_COURSE, SEARCH_COURSE } from "../config/constants";
import { GQL } from "../config/api";

export const getCourse = () => {
  return {
    type: GET_COURSE,
    payload: async () => {
      const string = `{
        courses {
          id
          title
          cover
          description
        }
      }`;

      const res = await GQL(string);
      const data = res.data.data.courses;
      return data;
    }
  };
};

export const searchCourse = search => {
  return {
    type: SEARCH_COURSE,
    payload: async () => {
      const string = `{
        courses(
          where: { title_contains: "${search}" }
        ) {
          id
          title
          cover
          description
        }
      }`;

      const res = await GQL(string);
      const data = res.data.data.courses;
      return data;
    }
  };
};
export const createCourse = course => {
  return {
    type: INPUT_COURSE,
    payload: async () => {}
  };
};

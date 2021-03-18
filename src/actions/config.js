export const SET_CURRENT_SITE = 'SET_CURRENT_SITE';
export const DELETE_HEADERS_BY_INDEX = 'DELETE_HEADERS_BY_INDEX';
export const fetchConfig = ({
  type,
  data,
}) => {
  return {
    type,
    data,
  };
};
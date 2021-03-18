export const SET_CURRENT_SITE = 'SET_CURRENT_SITE';
export const DELETE_HEADERS_BY_INDEX = 'DELETE_HEADERS_BY_INDEX';
export const CHANGE_HEADERS_BY_INDEX = 'CHANGE_HEADERS_BY_INDEX';
export const CREACTE_NEW_PAGE_BY_PAGE_NAME = 'CREACTE_NEW_PAGE_BY_PAGE_NAME';
export const fetchConfig = ({
  type,
  data,
}) => {
  return {
    type,
    data,
  };
};
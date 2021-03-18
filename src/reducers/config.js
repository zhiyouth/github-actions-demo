import { SET_CURRENT_SITE } from '../actions';
const defaultConfig = {
  currentSite: [],
  pageHeaders: [
    {
      tag: 'page',
      pageName: 'home',
      active: false
    }
  ],
};
export const config = (state = defaultConfig, action) => {
  switch (action.type) {
  case SET_CURRENT_SITE: {
    return {
      ...state,
      ...action.data,
    };
  }
  default: return state;
  }
};
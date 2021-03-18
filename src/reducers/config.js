import { SET_CURRENT_SITE, DELETE_HEADERS_BY_INDEX } from '../actions';
const defaultConfig = {
  currentSite: [],
  pageHeaders: [
    {
      tag: 'page',
      pageName: 'home',
      active: true,
      name: '首页'
    },
    {
      tag: 'page',
      pageName: 'home',
      active: false,
      name: '在线开发'
    },
  ],
  currentPageIndex: 0,
};
export const config = (state = defaultConfig, action) => {
  switch (action.type) {
  case SET_CURRENT_SITE: {
    return {
      ...state,
      ...action.data,
    };
  }
  case DELETE_HEADERS_BY_INDEX: {
    const { pageHeaders, currentSite } = state;
    const { index } = action.data;
    const newPageHeader = JSON.parse(JSON.stringify(pageHeaders));
    newPageHeader.splice(index, 1);
    return {
      currentSite,
      pageHeaders: newPageHeader,
    };
  }
  default: return state;
  }
};
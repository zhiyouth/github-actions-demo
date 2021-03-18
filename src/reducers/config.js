import {
  SET_CURRENT_SITE,
  DELETE_HEADERS_BY_INDEX,
  CHANGE_HEADERS_BY_INDEX,
  CREACTE_NEW_PAGE_BY_PAGE_NAME,
} from '../actions';
import { createNewPageByPageName, createUserPageConfig } from '../util';
const defaultConfig = {
  currentSite: [],
  pageHeaders: [
    createNewPageByPageName('HomePage')
  ],
  currentPageIndex: 0,
  isHasHomePage: true,
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
    const { pageHeaders, currentSite, currentPageIndex, isHasHomePage } = state;
    const { index } = action.data;
    let newCurrentPageIndex = currentPageIndex;
    let newIsHasHomePage = isHasHomePage;
    if (pageHeaders[index].active === true) {
      newCurrentPageIndex = -1;
    }
    const newPageHeaders = JSON.parse(JSON.stringify(pageHeaders));
    if (newPageHeaders[index].pageName === 'HomePage') {
      newIsHasHomePage = false;
    }
    newPageHeaders.splice(index, 1);
    return {
      currentSite,
      pageHeaders: newPageHeaders,
      currentPageIndex: newCurrentPageIndex,
      isHasHomePage: newIsHasHomePage,
    };
  }
  case CHANGE_HEADERS_BY_INDEX: {
    const { pageHeaders, currentPageIndex } = state;
    const { index } = action.data;
    const newPageHeaders = JSON.parse(JSON.stringify(pageHeaders));
    if (currentPageIndex === -1) {
      newPageHeaders[index].active = true;
    } else {
      newPageHeaders[currentPageIndex].active = false;
      newPageHeaders[index].active = true;
    }
    return {
      ...state,
      pageHeaders: newPageHeaders,
      currentPageIndex: index,
    };
  }
  case CREACTE_NEW_PAGE_BY_PAGE_NAME: {
    const { pageHeaders, currentPageIndex, isHasHomePage } = state;
    const { pageName, userPageName } = action.data;
    let newIsHasHomePage = isHasHomePage;
    const newPageHeaders = JSON.parse(JSON.stringify(pageHeaders));
    if (currentPageIndex !== -1) {
      newPageHeaders[currentPageIndex].active = false;
    }
    if (pageName === 'HomePage') {
      newIsHasHomePage = true;
    }
    if (pageName === 'UserPage') {
      // 用户自定义页面名字
      console.log(createUserPageConfig(userPageName), 'uuu');
      newPageHeaders.unshift(createUserPageConfig(userPageName));
    } else {
      newPageHeaders.unshift(createNewPageByPageName(pageName));
    }
    newPageHeaders[0].active = true;
    return {
      ...state,
      pageHeaders: newPageHeaders,
      isHasHomePage: newIsHasHomePage,
      currentPageIndex: 0,
    };
  }
  default: return state;
  }
};
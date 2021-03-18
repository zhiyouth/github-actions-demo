import { SET_CURRENT_SITE } from '../actions';
const defaultConfig = {
  currentSite: [],
  pageHeaders: [
    {
      tag: 'page',
      pageName: 'home',
      active: false,
      name: '首页'
    },
    {
      tag: 'page',
      pageName: 'home',
      active: false,
      name: '在线开发'
    },
    {
      tag: 'page',
      pageName: 'home',
      active: false,
      name: '在线开发'
    },
    {
      tag: 'page',
      pageName: 'home',
      active: false,
      name: '在线开发'
    },
    {
      tag: 'page',
      pageName: 'home',
      active: false,
      name: '在线开发'
    },
    {
      tag: 'page',
      pageName: 'home',
      active: false,
      name: '在线开发'
    },
    {
      tag: 'page',
      pageName: 'home',
      active: false,
      name: '在线开发'
    },
    {
      tag: 'page',
      pageName: 'home',
      active: false,
      name: '在线开发'
    },
    {
      tag: 'page',
      pageName: 'home',
      active: false,
      name: '在线开发'
    },
    {
      tag: 'page',
      pageName: 'home',
      active: false,
      name: '在线开发'
    },
    {
      tag: 'page',
      pageName: 'home',
      active: false,
      name: '在线开发'
    },
    {
      tag: 'page',
      pageName: 'home',
      active: false,
      name: '在线开发'
    },
    {
      tag: 'page',
      pageName: 'home',
      active: false,
      name: '在线开发'
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
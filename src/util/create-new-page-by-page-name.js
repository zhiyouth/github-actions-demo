import Config from '../config.json';
export const createNewPageByPageName = (pageName) => {
  return Config.pages[pageName];
};
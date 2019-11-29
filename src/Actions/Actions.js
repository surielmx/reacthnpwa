import { getStoryPage, getItem, getUser } from "../api/fetchApi";

export const getTotalPages = (story) => {
  const totalPages = {
    news: 10,
    newest: 12,
    ask: 2,
    show: 2,
    jobs: 1
  };
  return totalPages[story];
};

export const validatePage = (page, total) => {
  let validPage = !isNaN(page);

  if (validPage && total) {
    return page <= total;
  }
  return validPage;
};

export const validateItem = (item) => {
  let isValidItem = !isNaN(item);
  let validItem = isValidItem && +item.length === 8;
  return validItem;
};

export const getStory = async (type, page) => {
  return await getStoryPage(type, page).then((data) => {
    return (
      (data &&
        data.map((item, index) => {
          return {
            ...item,
            index
          };
        })) ||
      []
    );
  });
};

export const getStoryItem = async (item) => {
  return await getItem(item).then((data) => {
    return data;
  });
};

export const getStoryUser = async (item) => {
  return await getUser(item).then((data) => {
    return data;
  });
};

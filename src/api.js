import {API_URL} from './config';

const getPaginated = async (page) => {
  try {
    const response = await fetch(API_URL + '?page=' + page);
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    if (data === null || data === undefined) {
      throw new Error('Response data is null or undefined.');
    }

    return data;
  } catch (error) {
    console.error('getPaginated error:', error);
    throw error;
  }
};

const getAllCategories = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    if (data === null || data === undefined) {
      throw new Error('Response data is null or undefined.');
    }

    return data;
  } catch (error) {
    console.error('getAllCategories error:', error);
    throw error;
  }
};

const getFilteredCategory = async (nameFilter, statusFilter) => {
  if (nameFilter === undefined || nameFilter === null) {
    throw new Error('nameFilter is null or undefined');
  }

  if (statusFilter === undefined || statusFilter === null) {
    throw new Error('statusFilter is null or undefined');
  }

  try {
    const response = await fetch(
      API_URL +
        '?name=' +
        encodeURIComponent(nameFilter) +
        '&status=' +
        encodeURIComponent(statusFilter)
    );
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    if (data === null || data === undefined) {
      throw new Error('Response data is null or undefined.');
    }

    return data;
  } catch (error) {
    console.error('getFilteredCategory error:', error);
    throw error;
  }
};

export {getPaginated, getAllCategories, getFilteredCategory};


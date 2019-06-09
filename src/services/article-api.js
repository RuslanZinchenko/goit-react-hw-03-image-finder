import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';

/* eslint-disable-next-line */
export const fetchArticles = (
  query = '',
  pageNumber = 1,
  perPage = 12,
  key = '12702863-b7e35c50f6cb63d6d6fe48313',
) =>
  axios.get(
    `${BASE_URL}+${query}&page=${pageNumber}&per_page=${perPage}&key=${key}`,
  );

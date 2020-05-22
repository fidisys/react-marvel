import { BASE_URL } from '../helper';
import Interceptor from './interceptor';
import logger from '../logger';

const request = new Interceptor();

export const getUserDetailsAPI = async (success, error) => {
  try {
    const response = await request.get(`${BASE_URL}/profile`);
    return success(response);
  } catch (err) {
    error();
    logger(err);
  }
};
  
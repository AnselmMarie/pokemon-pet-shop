import axios from 'axios';

import { BASE_URL } from './apiClient.const';

export const axiosInstance = axios.create({ baseURL: BASE_URL });

import axios from 'axios';

import { BASE_URL } from './api-client.const';

export const axiosInstance = axios.create({ baseURL: BASE_URL });

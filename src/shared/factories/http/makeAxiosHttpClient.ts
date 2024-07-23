import { AxiosHttpClientAdapter } from 'infra/adapters/HttpClient';

export const makeAxiosHttpClient = () => new AxiosHttpClientAdapter();

import { HttpClient } from '@/application/protocols';
import { AxiosHttpClient } from '@/infra/http';

export const makeAxiosHttpClient = (): HttpClient => new AxiosHttpClient();

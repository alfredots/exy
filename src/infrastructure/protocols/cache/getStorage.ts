/* eslint-disable @typescript-eslint/no-explicit-any */
export interface GetStorage {
  get<T>(key: string): T;
}

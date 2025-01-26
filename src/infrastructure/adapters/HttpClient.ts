import axios, { AxiosError, AxiosResponse } from 'axios';
import { BackendErrorResponse, ErrorDetail, ErrorResponse } from '@/infrastructure/models/ErrorResponse';
import { HttpClient, HttpResponse, HttpRequest } from '@/infrastructure/protocols/http';

import { isObject } from '@/shared/utils/validators/is-object';

class AxiosHttpClientAdapter implements HttpClient {
  async request<R>(data: HttpRequest): Promise<HttpResponse<R>> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      });
    } catch (error) {
      const _error = error as AxiosError;
      const backendErrorResponse = _error.response?.data as BackendErrorResponse;

      if (_error.response) {
        let errorResponse = {} as ErrorResponse;

        if (isObject(backendErrorResponse.errors)) {
          const errors = Object.entries(backendErrorResponse.errors).map(([key, value]) => ({ code: key, message: String(value[0]) }) as ErrorDetail);
          errorResponse = {
            errors,
            success: false
          };

          axiosResponse = {
            ..._error.response,
            data: errorResponse
          };
        } else {
          axiosResponse = _error.response;
        }
      } else {
        axiosResponse = {
          status: 400,
          data: {
            errors: [
              {
                code: 'Axios',
                message: _error.message
              } as ErrorDetail
            ],
            success: false
          }
        } as AxiosResponse;
      }
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse?.data
    };
  }
}

export const makeAxiosHttpClientAdapter = (): HttpClient => new AxiosHttpClientAdapter();

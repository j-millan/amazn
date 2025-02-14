/* eslint-disable @typescript-eslint/no-explicit-any */

export interface HttpGetParams {
  [key: string]: any;
}

export interface HttpGetOptions {
  params?: HttpGetParams;
  cache?: RequestCache;
}
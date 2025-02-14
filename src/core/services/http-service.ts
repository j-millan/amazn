import { HttpGetOptions } from "../interfaces/http-get.interface";
import { HttpPostBody } from "../interfaces/http-post.interface";
import { FetchMethodEnum } from "../enums/fetch-method.enum";

class HttpService {
  async get<ResponseType>(
    path: string,
    { params, cache }: HttpGetOptions = { cache: 'default' }
  ): Promise<ResponseType> {
    const query = new URLSearchParams(params);
    const url = `${process.env.AMAZN_API_URL}${path}?` + query.toString();
    const response = fetch(url, { cache });

    return (await response).json();
  }

  async post<ResponseType>(
    path: string,
    body: HttpPostBody
  ): Promise<ResponseType> {
    const url = `${process.env.AMAZN_API_URL}${path}`;
    const response = fetch(url, {
      method: FetchMethodEnum.POST,
      body: JSON.stringify(body),
    });

    return (await response).json();
  }
}

export const http = new HttpService();

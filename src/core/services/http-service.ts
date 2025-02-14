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
    const response = await fetch(url, { cache });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    return response.json();
  }

  async post<ResponseType>(
    path: string,
    body: HttpPostBody
  ): Promise<ResponseType> {
    const url = `${process.env.AMAZN_API_URL}${path}`;
    const response = await fetch(url, {
      method: FetchMethodEnum.POST,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    return response.json();
  }
}

export const http = new HttpService();

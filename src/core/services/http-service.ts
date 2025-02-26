import { HttpGetOptions } from "../interfaces/http-get.interface";
import { HttpPostBody } from "../interfaces/http-post.interface";
import { HttpErrorException } from "../exceptions/http-error.exception";
import { FetchMethodEnum } from "../enums/fetch-method.enum";

class HttpService {
  async get<ResponseType>(
    path: string,
    { params, cache }: HttpGetOptions = { cache: 'default' }
  ): Promise<ResponseType | null> {
    const query = new URLSearchParams(params);
    const url = `${process.env.AMAZN_API_URL}${path}?` + query.toString();
    const response = await fetch(url, { cache });

    if (!response.ok) { 
      this._handleError(response);
    }

    if (response.status === 204) {
      return null;
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
      headers: {
        accept: "application/json",
        'Content-Type': "application/json",
      },
    });

    if (!response.ok) {
      this._handleError(response);
    }

    return response.json();
  }

  private async _handleError(response: Response): Promise<never> {
    const error = JSON.parse(await response.text());

    throw new HttpErrorException(
      error.message,
      error.statusCode,
      error.error
    );
  }
}

export const http = new HttpService();

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
// import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { HttpResponse } from '../const/http.const';
// import { TokenService } from '../services/token.service';

export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

@Injectable()
export class ServerHttpClient {
  // private api = environment.api;
  private api = '';


  // Extending the HttpClient through the Angular DI.
  public constructor(
    public http: HttpClient,
    // private tokenService: TokenService
  ) {}

  /**
   * GET request
   * @param {string} endPoint, it doesn't need / in front of the end point
   * @returns {Observable<Object>}
   */
  public Get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    // if (this.tokenService.token) {
    //   options.headers = options.headers.set(
    //     'Authentication',
    //     this.tokenService.token
    //   );
    // }
    return this.http.get<T>(this.api + endPoint, options);
  }

  /**
   * POST request
   * @param {string} The end point of the api
   * @param {Object} The body of the request.
   * @param {IRequestOptions} the options of the request like headers, body, etc.
   * @returns {Observable<Object>} The response.
   */
  public Post<T>(
    endPoint: string,
    params: Object,
    options?: IRequestOptions
  ): Observable<T> {
    // if (this.tokenService.token) {
    //   options.headers = options.headers.set(
    //     'Authentication',
    //     this.tokenService.token
    //   );
    // }
    return this.http.post<T>(this.api + endPoint, params, options);
  }

  /**
   * PUT request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Put<T>(
    endPoint: string,
    params: T,
    options?: IRequestOptions
  ): Observable<T> {
    // if (this.tokenService.token) {
    //   options.headers = options.headers.set(
    //     'Authentication',
    //     this.tokenService.token
    //   );
    // }

    return this.http.put<T>(this.api + endPoint, params, options);
  }

  /**
   * DELETE request
   * @param {string} endPoint end point of the api
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<Object>}
   */
  public Delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    // if (this.tokenService.token) {
    //   options.headers = options.headers.set(
    //     'Authentication',
    //     this.tokenService.token
    //   );
    // }
    return this.http.delete<T>(endPoint, options);
  }
}

export function serverHttpClientCreator(
  http: HttpClient,
  // tokenService: TokenService
) {
  // return new ApplicationHttpClient(http, tokenService);
  return new ServerHttpClient(http);
}

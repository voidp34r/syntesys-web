import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public constructor(
  ) {
  }

  public intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor');
    let clonedRequest: HttpRequest<any>;
       clonedRequest = req.clone({
        headers: req.headers
      });
    // if (this.tokenService.token) {
    //   clonedRequest = req.clone({
    //     headers: req.headers.set('Authentication', this.tokenService.token)
    //   });
    // }

    return next.handle(clonedRequest);
  }
}

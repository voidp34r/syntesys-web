import { Injectable } from '@angular/core';


@Injectable()
export class HttpService {
  private api = 'assets/json.json';

  constructor(
  ) {}

  // get(url: string): any {
  //   this.showLoader();
  //   return this.http.get(this.Url);
  //     .catch(this.onCatch)
  //     .do(
  //       (res: Response) => {
  //         console.log('toadwqw');
  //         this.onSuccess(res);
  //       },
  //       (error: any) => {
  //         this.onError(error);
  //       }
  //     )
  //     .finally(() => {
  //       this.onEnd();
  //     });
  // }
  // private onCatch(error: any, caught: Observable<any>): Observable<any> {
  //   return Observable.throw(error);
  // }

  // private onSuccess(res: Response): void {
  //   console.log('Request successful');
  // }

  // private onError(res: Response): void {
  //   console.log('Error, status code: ' + res.status);
  // }

  // private onEnd(): void {
  //   this.hideLoader();
  // }

  // private showLoader(): void {
  //   this.loaderService.show();
  // }

  // private hideLoader(): void {
  //   this.loaderService.hide();
  // }
}

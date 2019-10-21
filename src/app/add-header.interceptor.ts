import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';

export class AddHeaderIntercept implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestCopy = req.clone(
      {
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        }),
      }
    );
    return next.handle(requestCopy);
  }
}

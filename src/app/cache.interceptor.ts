import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { CacheService } from './cache.service';
import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()

export class CacheInterceptor implements HttpInterceptor {

  constructor(private cacheService: CacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Invalidate Cache Service if not get request & pass request on
    if (req.method !== 'GET') {
      this.cacheService.invalidateCache();
      return next.handle(req);
    }

    const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);

    if (cachedResponse) {
      return of(cachedResponse);
    }

    return next.handle(req)
    .pipe(
      tap(event => {
          if (event instanceof HttpResponse) {
            this.cacheService.put(req.url, event);
          }
        }
      )
    );

  }



}

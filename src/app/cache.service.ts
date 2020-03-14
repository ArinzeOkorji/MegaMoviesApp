import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  req: any = { };

  constructor() { }

  // Put item in cache
  put(url: string, response: HttpResponse<any>): void {
    this.req[url] = response;
  }

  // Get item from cache
  get(url: string): HttpResponse<any> | undefined {
    return this.req[url];
  }

  // Invalidate url
  invalidateUrl(url: string): void {
    this.req[url] = undefined;
  }
  // Invalidate cache
  invalidateCache(): void {
    this.req = { };
  }
}

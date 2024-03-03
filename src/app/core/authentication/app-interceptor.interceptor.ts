import { HttpInterceptorFn } from '@angular/common/http';

export const appInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

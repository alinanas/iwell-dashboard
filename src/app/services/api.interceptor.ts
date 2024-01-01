import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const apiInterceptor: HttpInterceptorFn = (request, next) => {
  const apiKey = environment['API_KEY'];

  request = request.clone({
    setHeaders: {
      'x-api-key': apiKey || '',
    },
  });

  return next(request);
};

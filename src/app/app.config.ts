import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // HashStrategy, # le indica al navegador que no navegue a esa carpeta
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
};

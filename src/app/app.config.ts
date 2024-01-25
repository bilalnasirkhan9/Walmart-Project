import { ApplicationConfig } from '@angular/core';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [ provideClientHydration()]
};

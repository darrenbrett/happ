import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HappAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(HappAppComponent);

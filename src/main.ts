import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { HappModule } from './app/happ.module';
import { APP_ROUTES_PROVIDERS } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HappModule, APP_ROUTES_PROVIDERS);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { HappModule } from './app/happ.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HappModule);

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Fb1AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Fb1AppComponent);


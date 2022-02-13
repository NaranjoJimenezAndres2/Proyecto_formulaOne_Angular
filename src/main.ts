import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {NgbdCarouselBasicModule} from './app/componentes/slide/carousel-basic.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



  platformBrowserDynamic()
  .bootstrapModule(NgbdCarouselBasicModule)
  .catch(err => console.error(err));

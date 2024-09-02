(window as any).global = window;
import { Buffer } from 'buffer';
(window as any).Buffer = Buffer;


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

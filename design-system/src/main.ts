import { provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideCsTheme } from '@cornerstone/ui';
import { CsDocsAppComponent } from './app';
import './styles.scss';

bootstrapApplication(CsDocsAppComponent, {
  providers: [provideZonelessChangeDetection(), provideCsTheme('system')],
}).catch((error: unknown) => console.error(error));

import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {
  CsAlertComponent,
  CsBadgeComponent,
  CsButtonDirective,
  CsCardComponent,
  CsContainerComponent,
  CsFieldComponent,
  CsInputDirective,
  CsPageComponent,
  CsSectionComponent,
  CsSectionHeaderComponent,
  CsThemeService,
} from '@cornerstone/ui';
import api from '../generated/api.json';
import { guides } from './guides.constant';

@Component({
  selector: 'cs-docs-app',
  imports: [
    CsAlertComponent,
    CsBadgeComponent,
    CsButtonDirective,
    CsCardComponent,
    CsContainerComponent,
    CsFieldComponent,
    CsInputDirective,
    CsPageComponent,
    CsSectionComponent,
    CsSectionHeaderComponent,
  ],
  templateUrl: './cs-docs-app.component.html',
  styleUrl: './cs-docs-app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CsDocsAppComponent {
  private readonly theme = inject(CsThemeService);
  protected readonly guides = guides;
  protected readonly query = signal('');
  protected readonly visibleApi = computed(() => {
    const query = this.query().trim().toLocaleLowerCase();
    return query ? api.filter((entry) => entry.name.toLocaleLowerCase().includes(query)) : api;
  });
  protected toggleTheme(): void {
    this.theme.set(this.theme.resolved() === 'dark' ? 'light' : 'dark');
  }
  protected source(path: string): string {
    return path.split('/').at(-1)?.replace('.ts', '') ?? path;
  }
}

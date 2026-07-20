import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  computed,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import {
  CsAvatarComponent,
  CsBadgeComponent,
  CsButtonDirective,
  CsCardComponent,
  CsProgressBarComponent,
  CsProgressRingComponent,
} from '../foundations';
import {
  CsCheckboxComponent,
  CsChoiceCardComponent,
  CsChoiceGroupComponent,
  CsFieldComponent,
  CsInputDirective,
  CsSearchFieldComponent,
  CsTextareaDirective,
} from '../forms';
import { CsDataState, CsIntent, CsViewModel } from '../platform';
import {
  CsPersonComponent,
  CsPersonSummary,
  CsProgressMatrixComponent,
  CsStatCardComponent,
  CsTableContainerComponent,
  CsTableDirective,
  CsTimelineComponent,
  CsTimelineEntry,
} from '../data-display';
import { CsAchievementCardComponent } from './cs-achievement-card.component';
import { CsAchievementSelect } from './cs-achievement-select.interface';
import { CsAchievementView } from './cs-achievement-view.interface';
import { CsCollectionLayout } from './cs-collection-layout.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-badge-collection',
  imports: [CsAchievementCardComponent],
  templateUrl: './cs-badge-collection.component.html',
  styleUrl: './cs-badge-collection.component.scss',
})
export class CsBadgeCollectionComponent {
  readonly items = input.required<readonly CsAchievementView[]>();
  readonly layout = input<CsCollectionLayout>('grid');
  readonly selected = output<CsAchievementSelect>();
}

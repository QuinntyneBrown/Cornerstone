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
import { CsAchievementSelect } from './cs-achievement-select.interface';
import { CsAchievementView } from './cs-achievement-view.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-achievement-card',
  imports: [CsCardComponent, CsProgressBarComponent],
  templateUrl: './cs-achievement-card.component.html',
  styleUrl: './cs-achievement-card.component.scss',
})
export class CsAchievementCardComponent {
  readonly achievement = input.required<CsAchievementView>();
  readonly selected = output<CsAchievementSelect>();
}

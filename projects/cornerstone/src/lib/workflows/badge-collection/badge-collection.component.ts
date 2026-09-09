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
  AvatarComponent,
  BadgeComponent,
  CsButtonDirective,
  CardComponent,
  ProgressBarComponent,
  ProgressRingComponent,
} from '../../foundations';
import {
  CheckboxComponent,
  ChoiceCardComponent,
  ChoiceGroupComponent,
  FieldComponent,
  CsInputDirective,
  SearchFieldComponent,
  CsTextareaDirective,
} from '../../forms';
import { CsDataState, CsIntent, CsViewModel } from '../../platform';
import {
  PersonComponent,
  PersonSummary,
  ProgressMatrixComponent,
  StatCardComponent,
  TableContainerComponent,
  TableDirective,
  TimelineComponent,
  TimelineEntry,
} from '../../data-display';
import { AchievementCardComponent } from '../achievement-card/achievement-card.component';
import { AchievementSelect } from '../achievement-card/achievement-select.interface';
import { AchievementView } from '../achievement-card/achievement-view.interface';
import { CollectionLayout } from './collection-layout.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-badge-collection',
  imports: [AchievementCardComponent],
  templateUrl: './badge-collection.component.html',
  styleUrl: './badge-collection.component.scss',
})
export class BadgeCollectionComponent {
  readonly items = input.required<readonly AchievementView[]>();
  readonly layout = input<CollectionLayout>('grid');
  readonly selected = output<AchievementSelect>();
}

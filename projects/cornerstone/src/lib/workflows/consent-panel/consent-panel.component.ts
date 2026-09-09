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
import { ConsentContactUpdateIntent } from './consent-contact-update-intent.interface';
import { ConsentDecisionIntent } from './consent-decision-intent.interface';
import { ConsentPanelViewModel } from './consent-panel-view-model.interface';
import { ConsentRevokeIntent } from './consent-revoke-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-consent-panel',
  imports: [BadgeComponent, ChoiceGroupComponent, ChoiceCardComponent],
  templateUrl: './consent-panel.component.html',
  styleUrl: './consent-panel.component.scss',
})
export class ConsentPanelComponent {
  readonly view = input.required<ConsentPanelViewModel>();
  readonly decision = output<ConsentDecisionIntent>();
  readonly revoke = output<ConsentRevokeIntent>();
  readonly contactUpdate = output<ConsentContactUpdateIntent>();
}

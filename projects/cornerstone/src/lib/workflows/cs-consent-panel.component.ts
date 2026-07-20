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
import { CsConsentContactUpdateIntent } from './cs-consent-contact-update-intent.interface';
import { CsConsentDecisionIntent } from './cs-consent-decision-intent.interface';
import { CsConsentPanelViewModel } from './cs-consent-panel-view-model.interface';
import { CsConsentRevokeIntent } from './cs-consent-revoke-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-consent-panel',
  imports: [CsBadgeComponent, CsChoiceGroupComponent, CsChoiceCardComponent],
  templateUrl: './cs-consent-panel.component.html',
  styleUrl: './cs-consent-panel.component.scss',
})
export class CsConsentPanelComponent {
  readonly view = input.required<CsConsentPanelViewModel>();
  readonly decision = output<CsConsentDecisionIntent>();
  readonly revoke = output<CsConsentRevokeIntent>();
  readonly contactUpdate = output<CsConsentContactUpdateIntent>();
}

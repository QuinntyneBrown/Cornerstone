import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  InjectionToken,
  Provider,
  computed,
  input,
  output,
} from '@angular/core';
import {
  CsBadgeComponent,
  CsButtonDirective,
  CsCardComponent,
  CsProgressRingComponent,
} from '../foundations';
import { CsCheckboxComponent } from '../forms';
import { CsGateAdvanceIntent } from './cs-gate-advance-intent.interface';
import { CsGateMode } from './cs-gate-mode.type';
import { CsGateSummary } from './cs-gate-summary.interface';
import { CsRequirement } from './cs-requirement.interface';
import { CsRequirementChecklistComponent } from './cs-requirement-checklist.component';
import { CsRequirementToggleIntent } from './cs-requirement-toggle-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-gate',
  imports: [CsRequirementChecklistComponent, CsButtonDirective],
  templateUrl: './cs-gate.component.html',
  styleUrl: './cs-gate.component.scss',
})
export class CsGateComponent {
  readonly id = input.required<string>();
  readonly title = input.required<string>();
  readonly requirements = input.required<readonly CsRequirement[]>();
  readonly mode = input<CsGateMode>('read');
  readonly summary = computed<CsGateSummary>(() => ({
    complete: this.requirements().filter((r) => r.complete).length,
    total: this.requirements().length,
    blocking: this.requirements().filter((r) => r.required && !r.complete).length,
  }));
  readonly requirementToggle = output<CsRequirementToggleIntent>();
  readonly advance = output<CsGateAdvanceIntent>();
}

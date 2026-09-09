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
  BadgeComponent,
  CsButtonDirective,
  CardComponent,
  ProgressRingComponent,
} from '../../foundations';
import { CheckboxComponent } from '../../forms';
import { GateAdvanceIntent } from './gate-advance-intent.interface';
import { GateMode } from './gate-mode.type';
import { GateSummary } from './gate-summary.interface';
import { CsRequirement } from '../cs-requirement.interface';
import { RequirementChecklistComponent } from '../requirement-checklist/requirement-checklist.component';
import { CsRequirementToggleIntent } from '../cs-requirement-toggle-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-gate',
  imports: [RequirementChecklistComponent, CsButtonDirective],
  templateUrl: './gate.component.html',
  styleUrl: './gate.component.scss',
})
export class GateComponent {
  readonly id = input.required<string>();
  readonly title = input.required<string>();
  readonly requirements = input.required<readonly CsRequirement[]>();
  readonly mode = input<GateMode>('read');
  readonly summary = computed<GateSummary>(() => ({
    complete: this.requirements().filter((r) => r.complete).length,
    total: this.requirements().length,
    blocking: this.requirements().filter((r) => r.required && !r.complete).length,
  }));
  readonly requirementToggle = output<CsRequirementToggleIntent>();
  readonly advance = output<GateAdvanceIntent>();
}

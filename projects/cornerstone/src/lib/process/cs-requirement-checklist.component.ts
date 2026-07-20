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
import { CsRequirement } from './cs-requirement.interface';
import { CsRequirementToggleIntent } from './cs-requirement-toggle-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-requirement-checklist',
  imports: [CsCheckboxComponent],
  templateUrl: './cs-requirement-checklist.component.html',
  styleUrl: './cs-requirement-checklist.component.scss',
})
export class CsRequirementChecklistComponent {
  readonly requirements = input.required<readonly CsRequirement[]>();
  readonly toggled = output<CsRequirementToggleIntent>();
}

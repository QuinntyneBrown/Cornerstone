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
import { CsRequirement } from '../cs-requirement.interface';
import { CsRequirementToggleIntent } from '../cs-requirement-toggle-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-requirement-checklist',
  imports: [CheckboxComponent],
  templateUrl: './requirement-checklist.component.html',
  styleUrl: './requirement-checklist.component.scss',
})
export class RequirementChecklistComponent {
  readonly requirements = input.required<readonly CsRequirement[]>();
  readonly toggled = output<CsRequirementToggleIntent>();
}

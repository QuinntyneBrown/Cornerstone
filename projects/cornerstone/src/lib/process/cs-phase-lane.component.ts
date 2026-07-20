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
import { CsPhase } from './cs-phase.interface';
import { CsProject } from './cs-project.interface';
import { CsProjectCardComponent } from './cs-project-card.component';
import { CsProjectOpenIntent } from './cs-project-open-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-phase-lane',
  imports: [CsProjectCardComponent],
  templateUrl: './cs-phase-lane.component.html',
  styleUrl: './cs-phase-lane.component.scss',
})
export class CsPhaseLaneComponent {
  readonly phase = input.required<CsPhase>();
  readonly projects = input.required<readonly CsProject[]>();
  readonly opened = output<CsProjectOpenIntent>();
}

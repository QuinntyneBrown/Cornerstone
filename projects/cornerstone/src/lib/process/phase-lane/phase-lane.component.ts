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
import { Phase } from './phase.interface';
import { Project } from '../project-card/project.interface';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectOpenIntent } from '../project-card/project-open-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-phase-lane',
  imports: [ProjectCardComponent],
  templateUrl: './phase-lane.component.html',
  styleUrl: './phase-lane.component.scss',
})
export class PhaseLaneComponent {
  readonly phase = input.required<Phase>();
  readonly projects = input.required<readonly Project[]>();
  readonly opened = output<ProjectOpenIntent>();
}

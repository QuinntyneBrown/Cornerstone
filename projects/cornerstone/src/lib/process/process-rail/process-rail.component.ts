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
import { CsProcessStage } from '../cs-process-stage.interface';
import { RailOrientation } from './rail-orientation.type';
import { CsStageActivation } from '../cs-stage-activation.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-process-rail',
  templateUrl: './process-rail.component.html',
  styleUrl: './process-rail.component.scss',
})
export class ProcessRailComponent {
  readonly stages = input.required<readonly CsProcessStage[]>();
  readonly orientation = input<RailOrientation>('auto');
  readonly activated = output<CsStageActivation>();
}

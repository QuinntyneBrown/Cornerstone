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
import { CsProcessStage } from './cs-process-stage.interface';
import { CsRailOrientation } from './cs-rail-orientation.type';
import { CsStageActivation } from './cs-stage-activation.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-process-rail',
  templateUrl: './cs-process-rail.component.html',
  styleUrl: './cs-process-rail.component.scss',
})
export class CsProcessRailComponent {
  readonly stages = input.required<readonly CsProcessStage[]>();
  readonly orientation = input<CsRailOrientation>('auto');
  readonly activated = output<CsStageActivation>();
}

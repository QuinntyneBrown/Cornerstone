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
import { CsProcessRailComponent } from './cs-process-rail.component';
import { CsProcessStage } from './cs-process-stage.interface';
import { CsRailOrientation } from './cs-rail-orientation.type';
import { CsStageActionIntent } from './cs-stage-action-intent.interface';
import { CsStageActivation } from './cs-stage-activation.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-process-journey',
  imports: [CsProcessRailComponent],
  templateUrl: './cs-process-journey.component.html',
  styleUrl: './cs-process-journey.component.scss',
})
export class CsProcessJourneyComponent {
  readonly stages = input.required<readonly CsProcessStage[]>();
  readonly orientation = input<CsRailOrientation>('auto');
  readonly activated = output<CsStageActivation>();
  readonly action = output<CsStageActionIntent>();
}

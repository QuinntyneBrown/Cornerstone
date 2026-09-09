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
import { ProcessRailComponent } from '../process-rail/process-rail.component';
import { CsProcessStage } from '../cs-process-stage.interface';
import { RailOrientation } from '../process-rail/rail-orientation.type';
import { StageActionIntent } from './stage-action-intent.interface';
import { CsStageActivation } from '../cs-stage-activation.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-process-journey',
  imports: [ProcessRailComponent],
  templateUrl: './process-journey.component.html',
  styleUrl: './process-journey.component.scss',
})
export class ProcessJourneyComponent {
  readonly stages = input.required<readonly CsProcessStage[]>();
  readonly orientation = input<RailOrientation>('auto');
  readonly activated = output<CsStageActivation>();
  readonly action = output<StageActionIntent>();
}

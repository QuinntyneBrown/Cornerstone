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
import { CsMovement } from './cs-movement.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-pip-strip',
  templateUrl: './cs-pip-strip.component.html',
  styleUrl: './cs-pip-strip.component.scss',
})
export class CsPipStripComponent {
  readonly label = input('Progress');
  readonly items = input.required<readonly CsMovement[]>();
}

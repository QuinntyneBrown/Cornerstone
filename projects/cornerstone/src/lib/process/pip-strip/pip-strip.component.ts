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
import { Movement } from '../movement-list/movement.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-pip-strip',
  templateUrl: './pip-strip.component.html',
  styleUrl: './pip-strip.component.scss',
})
export class PipStripComponent {
  readonly label = input('Progress');
  readonly items = input.required<readonly Movement[]>();
}

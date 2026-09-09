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
import { DialVariant } from './dial-variant.type';
import { Movement } from '../movement-list/movement.interface';
import { MovementActivation } from '../movement-list/movement-activation.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-movement-dial',
  imports: [ProgressRingComponent],
  templateUrl: './movement-dial.component.html',
  styleUrl: './movement-dial.component.scss',
})
export class MovementDialComponent {
  readonly movements = input.required<readonly Movement[]>();
  readonly variant = input<DialVariant>('full');
  readonly complete = computed(() => this.movements().filter((m) => m.state === 'complete').length);
  readonly activated = output<MovementActivation>();
}

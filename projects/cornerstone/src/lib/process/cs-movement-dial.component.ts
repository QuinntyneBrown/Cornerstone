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
import { CsDialVariant } from './cs-dial-variant.type';
import { CsMovement } from './cs-movement.interface';
import { CsMovementActivation } from './cs-movement-activation.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-movement-dial',
  imports: [CsProgressRingComponent],
  templateUrl: './cs-movement-dial.component.html',
  styleUrl: './cs-movement-dial.component.scss',
})
export class CsMovementDialComponent {
  readonly movements = input.required<readonly CsMovement[]>();
  readonly variant = input<CsDialVariant>('full');
  readonly complete = computed(() => this.movements().filter((m) => m.state === 'complete').length);
  readonly activated = output<CsMovementActivation>();
}

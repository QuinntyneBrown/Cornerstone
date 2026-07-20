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
import { CsMovementActivation } from './cs-movement-activation.interface';
import { CsMovementListVariant } from './cs-movement-list-variant.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-movement-list',
  imports: [CsBadgeComponent],
  templateUrl: './cs-movement-list.component.html',
  styleUrl: './cs-movement-list.component.scss',
})
export class CsMovementListComponent {
  readonly movements = input.required<readonly CsMovement[]>();
  readonly variant = input<CsMovementListVariant>('rows');
  readonly activated = output<CsMovementActivation>();
}

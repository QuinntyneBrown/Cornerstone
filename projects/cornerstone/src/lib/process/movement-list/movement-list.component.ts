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
import { Movement } from './movement.interface';
import { MovementActivation } from './movement-activation.interface';
import { MovementListVariant } from './movement-list-variant.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-movement-list',
  imports: [BadgeComponent],
  templateUrl: './movement-list.component.html',
  styleUrl: './movement-list.component.scss',
})
export class MovementListComponent {
  readonly movements = input.required<readonly Movement[]>();
  readonly variant = input<MovementListVariant>('rows');
  readonly activated = output<MovementActivation>();
}

import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  InjectionToken,
  booleanAttribute,
  input,
  output,
} from '@angular/core';
import { CsButtonDirective, CsCardComponent } from '../foundations';
import { CsAuthLayoutVariant } from './cs-auth-layout-variant.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-auth-layout',
  templateUrl: './cs-auth-layout.component.html',
  styleUrl: './cs-auth-layout.component.scss',
})
export class CsAuthLayoutComponent {
  readonly variant = input<CsAuthLayoutVariant>('centered');
}

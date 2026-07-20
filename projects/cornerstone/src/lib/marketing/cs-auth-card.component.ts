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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-auth-card',
  imports: [CsCardComponent],
  templateUrl: './cs-auth-card.component.html',
  styleUrl: './cs-auth-card.component.scss',
})
export class CsAuthCardComponent {}

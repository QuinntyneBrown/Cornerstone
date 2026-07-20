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
import { CsBrandName } from './cs-brand-name.type';
import { CsBrandSize } from './cs-brand-size.type';
import { CsBrandTreatment } from './cs-brand-treatment.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-logo-mark',
  templateUrl: './cs-logo-mark.component.html',
  host: { '[class]': "'cs-logo-mark cs-logo-mark--'+brand()+' cs-logo-mark--'+size()" },
  styleUrl: './cs-logo-mark.component.scss',
})
export class CsLogoMarkComponent {
  readonly brand = input<CsBrandName>('faithtech');
  readonly size = input<CsBrandSize>('medium');
  readonly treatment = input<CsBrandTreatment>();
  readonly label = input('');
}

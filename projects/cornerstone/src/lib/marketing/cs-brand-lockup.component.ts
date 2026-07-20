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
import { CsBrandLockupVariant } from './cs-brand-lockup-variant.type';
import { CsBrandName } from './cs-brand-name.type';
import { CsBrandSize } from './cs-brand-size.type';
import { CsBrandTreatment } from './cs-brand-treatment.type';
import { CsLogoMarkComponent } from './cs-logo-mark.component';
import { descriptors } from './descriptors.constant';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-brand-lockup',
  imports: [CsLogoMarkComponent],
  templateUrl: './cs-brand-lockup.component.html',
  styleUrl: './cs-brand-lockup.component.scss',
})
export class CsBrandLockupComponent {
  readonly brand = input<CsBrandName>('faithtech');
  readonly variant = input<CsBrandLockupVariant>('full');
  readonly treatment = input<CsBrandTreatment>();
  readonly size = input<CsBrandSize>('medium');
  readonly orientation = input<'horizontal' | 'stacked'>('horizontal');
  readonly href = input<string | null>(null);
  readonly descriptors = descriptors;
  readonly wordmark = () =>
    this.brand() === 'wordup' ? 'Word Up' : this.brand()[0]!.toUpperCase() + this.brand().slice(1);
}

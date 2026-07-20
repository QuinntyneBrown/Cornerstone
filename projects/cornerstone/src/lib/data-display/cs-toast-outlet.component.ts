import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
  TemplateRef,
  booleanAttribute,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import {
  CsAvatarComponent,
  CsBadgeComponent,
  CsButtonDirective,
  CsProgressBarComponent,
  CsProgressRingComponent,
  CsSkeletonComponent,
} from '../foundations';
import { CsDataState, CsDataStateError, CsFormatService, CsMessageTone } from '../platform';
import { Subject } from 'rxjs';
import { CsToastRef } from './cs-toast-ref.class';
import { CsToastService } from './cs-toast.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-toast-outlet',
  templateUrl: './cs-toast-outlet.component.html',
  styleUrl: './cs-toast-outlet.component.scss',
})
export class CsToastOutletComponent {
  readonly service = inject(CsToastService);
  protected act(toast: CsToastRef): void {
    toast.result.next('action');
    this.service.dismiss(toast.id);
  }
}

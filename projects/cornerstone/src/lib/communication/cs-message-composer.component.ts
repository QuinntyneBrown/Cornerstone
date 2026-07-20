import { ClipboardModule } from '@angular/cdk/clipboard';
import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Pipe,
  PipeTransform,
  booleanAttribute,
  computed,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import {
  CsAvatarComponent,
  CsBadgeComponent,
  CsButtonDirective,
  CsCardComponent,
  CsProgressBarComponent,
} from '../foundations';
import {
  CsChoiceGroupComponent,
  CsDateTimeFieldComponent,
  CsFieldComponent,
  CsInputDirective,
  CsSearchFieldComponent,
  CsTextareaDirective,
} from '../forms';
import { CsDataState, csSafeUrl } from '../platform';
import { CsSendIntent } from './cs-send-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-message-composer',
  imports: [CsTextareaDirective, CsButtonDirective],
  templateUrl: './cs-message-composer.component.html',
  styleUrl: './cs-message-composer.component.scss',
})
export class CsMessageComposerComponent {
  readonly value = model('');
  readonly placeholder = input('Write a message');
  readonly pending = input(false);
  readonly sent = output<CsSendIntent>();
  protected send(e: Event): void {
    e.preventDefault();
    const body = this.value().trim();
    if (body && !this.pending()) {
      this.sent.emit({ body });
      this.value.set('');
    }
  }
}

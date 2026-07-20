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
import { CsAnnouncementDraft } from './cs-announcement-draft.interface';
import { CsAudienceOption } from './cs-audience-option.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-announcement-composer',
  imports: [
    CsFieldComponent,
    CsInputDirective,
    CsTextareaDirective,
    CsDateTimeFieldComponent,
    CsButtonDirective,
  ],
  templateUrl: './cs-announcement-composer.component.html',
  styleUrl: './cs-announcement-composer.component.scss',
})
export class CsAnnouncementComposerComponent {
  readonly audiences = input.required<readonly CsAudienceOption[]>();
  readonly value = model.required<CsAnnouncementDraft>();
  readonly submitted = output<CsAnnouncementDraft>();
  readonly previewRequested = output<CsAnnouncementDraft>();
  protected submit(e: Event): void {
    e.preventDefault();
    this.submitted.emit(this.value());
  }
}

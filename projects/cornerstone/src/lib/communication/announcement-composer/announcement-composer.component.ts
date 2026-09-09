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
  AvatarComponent,
  BadgeComponent,
  CsButtonDirective,
  CardComponent,
  ProgressBarComponent,
} from '../../foundations';
import {
  ChoiceGroupComponent,
  DateTimeFieldComponent,
  FieldComponent,
  CsInputDirective,
  SearchFieldComponent,
  CsTextareaDirective,
} from '../../forms';
import { CsDataState, csSafeUrl } from '../../platform';
import { AnnouncementDraft } from './announcement-draft.interface';
import { AudienceOption } from './audience-option.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-announcement-composer',
  imports: [
    FieldComponent,
    CsInputDirective,
    CsTextareaDirective,
    DateTimeFieldComponent,
    CsButtonDirective,
  ],
  templateUrl: './announcement-composer.component.html',
  styleUrl: './announcement-composer.component.scss',
})
export class AnnouncementComposerComponent {
  readonly audiences = input.required<readonly AudienceOption[]>();
  readonly value = model.required<AnnouncementDraft>();
  readonly submitted = output<AnnouncementDraft>();
  readonly previewRequested = output<AnnouncementDraft>();
  protected submit(e: Event): void {
    e.preventDefault();
    this.submitted.emit(this.value());
  }
}

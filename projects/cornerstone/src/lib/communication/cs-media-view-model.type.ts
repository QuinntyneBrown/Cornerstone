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

export type CsMediaViewModel = {
  readonly kind: 'image' | 'video' | 'audio' | 'iframe';
  readonly src: string;
  readonly title: string;
  readonly poster?: string;
  readonly alt?: string;
};

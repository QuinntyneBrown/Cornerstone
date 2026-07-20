import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Provider,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CsButtonDirective } from '../foundations';
import { CsControlBase, CsIdService, CsLocalizationService } from '../platform';
import { CsFilePickerComponent } from './cs-file-picker.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-dropzone',
  imports: [CsFilePickerComponent],
  templateUrl: './cs-dropzone.component.html',
  host: { class: 'cs-dropzone' },
  styleUrl: './cs-dropzone.component.scss',
})
export class CsDropzoneComponent {
  readonly multiple = input(false);
  readonly accept = input('');
  readonly filesSelected = output<readonly File[]>();
  protected drop(e: DragEvent): void {
    e.preventDefault();
    this.filesSelected.emit(Array.from(e.dataTransfer?.files ?? []));
  }
}

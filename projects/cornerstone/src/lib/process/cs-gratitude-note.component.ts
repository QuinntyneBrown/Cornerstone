import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  InjectionToken,
  Provider,
  computed,
  input,
  output,
} from '@angular/core';
import {
  CsBadgeComponent,
  CsButtonDirective,
  CsCardComponent,
  CsProgressRingComponent,
} from '../foundations';
import { CsCheckboxComponent } from '../forms';
import { CsGratitudeNote } from './cs-gratitude-note.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-gratitude-note',
  imports: [CsCardComponent],
  templateUrl: './cs-gratitude-note.component.html',
  styleUrl: './cs-gratitude-note.component.scss',
})
export class CsGratitudeNoteComponent {
  readonly note = input.required<CsGratitudeNote>();
}

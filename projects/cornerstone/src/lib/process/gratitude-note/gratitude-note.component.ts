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
  BadgeComponent,
  CsButtonDirective,
  CardComponent,
  ProgressRingComponent,
} from '../../foundations';
import { CheckboxComponent } from '../../forms';
import { GratitudeNote } from './gratitude-note.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-gratitude-note',
  imports: [CardComponent],
  templateUrl: './gratitude-note.component.html',
  styleUrl: './gratitude-note.component.scss',
})
export class GratitudeNoteComponent {
  readonly note = input.required<GratitudeNote>();
}

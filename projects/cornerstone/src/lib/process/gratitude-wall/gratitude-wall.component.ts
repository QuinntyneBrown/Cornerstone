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
import { GratitudeNote } from '../gratitude-note/gratitude-note.interface';
import { GratitudeNoteComponent } from '../gratitude-note/gratitude-note.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-gratitude-wall',
  imports: [GratitudeNoteComponent],
  templateUrl: './gratitude-wall.component.html',
  styleUrl: './gratitude-wall.component.scss',
})
export class GratitudeWallComponent {
  readonly notes = input.required<readonly GratitudeNote[]>();
}

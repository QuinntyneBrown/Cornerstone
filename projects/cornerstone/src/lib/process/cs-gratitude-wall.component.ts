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
import { CsGratitudeNoteComponent } from './cs-gratitude-note.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-gratitude-wall',
  imports: [CsGratitudeNoteComponent],
  templateUrl: './cs-gratitude-wall.component.html',
  styleUrl: './cs-gratitude-wall.component.scss',
})
export class CsGratitudeWallComponent {
  readonly notes = input.required<readonly CsGratitudeNote[]>();
}

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
import { CsCalendarDate } from './cs-calendar-date.interface';
import { CsEventViewModel } from './cs-event-view-model.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-calendar',
  templateUrl: './cs-calendar.component.html',
  styleUrl: './cs-calendar.component.scss',
})
export class CsCalendarComponent {
  readonly label = input.required<string>();
  readonly dates = input.required<readonly CsCalendarDate[]>();
  readonly events = input<readonly CsEventViewModel[]>([]);
  readonly selected = model<string>();
  readonly dateSelected = output<string>();
  readonly previous = output<void>();
  readonly next = output<void>();
  protected eventsFor(date: string): readonly CsEventViewModel[] {
    return this.events().filter((event) => event.start.startsWith(date));
  }
  protected select(date: string): void {
    this.selected.set(date);
    this.dateSelected.emit(date);
  }
}

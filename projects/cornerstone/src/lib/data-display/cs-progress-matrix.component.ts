import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
  TemplateRef,
  booleanAttribute,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import {
  CsAvatarComponent,
  CsBadgeComponent,
  CsButtonDirective,
  CsProgressBarComponent,
  CsProgressRingComponent,
  CsSkeletonComponent,
} from '../foundations';
import { CsDataState, CsDataStateError, CsFormatService, CsMessageTone } from '../platform';
import { Subject } from 'rxjs';
import { CsMatrixCellState } from './cs-matrix-cell-state.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-progress-matrix',
  templateUrl: './cs-progress-matrix.component.html',
  styleUrl: './cs-progress-matrix.component.scss',
})
export class CsProgressMatrixComponent {
  readonly rowLabel = input('Name');
  readonly columns = input.required<readonly string[]>();
  readonly rows =
    input.required<readonly { label: string; cells: readonly CsMatrixCellState[] }[]>();
}

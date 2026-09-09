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
  AvatarComponent,
  BadgeComponent,
  CsButtonDirective,
  ProgressBarComponent,
  ProgressRingComponent,
  SkeletonComponent,
} from '../../foundations';
import { CsDataState, CsDataStateError, CsFormatService, CsMessageTone } from '../../platform';
import { Subject } from 'rxjs';
import { MatrixCellState } from './matrix-cell-state.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-progress-matrix',
  templateUrl: './progress-matrix.component.html',
  styleUrl: './progress-matrix.component.scss',
})
export class ProgressMatrixComponent {
  readonly rowLabel = input('Name');
  readonly columns = input.required<readonly string[]>();
  readonly rows = input.required<readonly { label: string; cells: readonly MatrixCellState[] }[]>();
}

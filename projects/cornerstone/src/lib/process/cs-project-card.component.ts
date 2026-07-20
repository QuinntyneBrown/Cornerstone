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
import { CsProject } from './cs-project.interface';
import { CsProjectOpenIntent } from './cs-project-open-intent.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-project-card',
  imports: [CsCardComponent],
  templateUrl: './cs-project-card.component.html',
  styleUrl: './cs-project-card.component.scss',
})
export class CsProjectCardComponent {
  readonly project = input.required<CsProject>();
  readonly opened = output<CsProjectOpenIntent>();
}

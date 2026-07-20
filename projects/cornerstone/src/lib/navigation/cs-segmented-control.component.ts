import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  TemplateRef,
  booleanAttribute,
  computed,
  contentChildren,
  inject,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import {
  CsAvatarComponent,
  CsBadgeComponent,
  CsButtonDirective,
  CsIconComponent,
} from '../foundations';
import { CsBreakpointService } from '../platform';
import { CsSegmentOption } from './cs-segment-option.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-segmented-control',
  templateUrl: './cs-segmented-control.component.html',
  styleUrl: './cs-segmented-control.component.scss',
})
export class CsSegmentedControlComponent<T = string> {
  readonly options = input.required<readonly CsSegmentOption<T>[]>();
  readonly value = model<T>();
  readonly selectionChange = output<T>();
  protected choose(value: T): void {
    this.value.set(value);
    this.selectionChange.emit(value);
  }
}

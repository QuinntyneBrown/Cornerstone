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
import { CsMarketingLinkGroup } from './cs-marketing-link-group.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-marketing-footer',
  templateUrl: './cs-marketing-footer.component.html',
  styleUrl: './cs-marketing-footer.component.scss',
})
export class CsMarketingFooterComponent {
  readonly groups = input<readonly CsMarketingLinkGroup[]>([]);
}

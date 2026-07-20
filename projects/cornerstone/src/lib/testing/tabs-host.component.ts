import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CsTabComponent, CsTabGroupComponent } from '../navigation';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CsTabComponent, CsTabGroupComponent],
  templateUrl: './tabs-host.component.html',
  styleUrl: './tabs-host.component.scss',
})
export class TabsHostComponent {}

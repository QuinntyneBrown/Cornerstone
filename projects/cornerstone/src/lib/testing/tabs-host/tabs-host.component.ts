import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabComponent, TabGroupComponent } from '../../navigation';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TabComponent, TabGroupComponent],
  templateUrl: './tabs-host.component.html',
  styleUrl: './tabs-host.component.scss',
})
export class TabsHostComponent {}

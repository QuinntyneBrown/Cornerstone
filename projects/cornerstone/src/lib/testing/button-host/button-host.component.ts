import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CsButtonDirective } from '../../foundations';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CsButtonDirective],
  templateUrl: './button-host.component.html',
  styleUrl: './button-host.component.scss',
})
export class ButtonHostComponent {}

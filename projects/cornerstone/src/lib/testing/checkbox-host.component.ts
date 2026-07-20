import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CsCheckboxComponent } from '../forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CsCheckboxComponent, ReactiveFormsModule],
  templateUrl: './checkbox-host.component.html',
  styleUrl: './checkbox-host.component.scss',
})
export class CheckboxHostComponent {
  readonly control = new FormControl(false, { nonNullable: true });
}

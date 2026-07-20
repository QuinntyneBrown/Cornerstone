import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Provider,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CsButtonDirective } from '../foundations';
import { CsControlBase, CsIdService, CsLocalizationService } from '../platform';
import { CsComboboxMode } from './cs-combobox-mode.type';
import { valueAccessor } from './value-accessor.function';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cs-combobox',
  providers: [valueAccessor(() => CsComboboxComponent)],
  templateUrl: './cs-combobox.component.html',
  styleUrl: './cs-combobox.component.scss',
})
export class CsComboboxComponent extends CsControlBase<string | string[]> {
  readonly listboxId = inject(CsIdService).next('listbox');
  readonly options = input.required<readonly { label: string; value: string }[]>();
  readonly mode = input<CsComboboxMode>('single');
  readonly query = signal('');
  readonly open = signal(false);
  readonly filtered = computed(() =>
    this.options().filter((o) => o.label.toLowerCase().includes(this.query().toLowerCase())),
  );
  protected selected(value: string): boolean {
    const current = this.value();
    return Array.isArray(current) ? current.includes(value) : current === value;
  }
  protected setQuery(e: Event): void {
    this.query.set((e.target as HTMLInputElement).value);
    this.open.set(true);
  }
  protected choose(option: { label: string; value: string }): void {
    if (this.mode() === 'multiple') {
      const current = Array.isArray(this.value()) ? (this.value() as string[]) : [];
      this.updateValue([...current, option.value]);
    } else {
      this.updateValue(option.value);
      this.query.set(option.label);
      this.open.set(false);
    }
  }
  protected cancel(): void {
    this.open.set(false);
    this.query.set('');
  }
}

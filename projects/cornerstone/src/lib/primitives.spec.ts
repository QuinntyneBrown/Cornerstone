import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CsBadgeComponent, CsButtonDirective, CsProgressComponent } from './primitives';

@Component({
  imports: [CsButtonDirective, CsBadgeComponent, CsProgressComponent],
  template: `
    <button csButton="secondary">Continue</button>
    <cs-badge tone="success">Complete</cs-badge>
    <cs-progress [value]="3" [max]="5" />
  `,
})
class TestHost {}

describe('Cornerstone primitives', () => {
  it('applies semantic classes and progress state', async () => {
    await TestBed.configureTestingModule({ imports: [TestHost] }).compileComponents();
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('button')?.classList.contains('cs-button--secondary')).toBe(true);
    expect(root.querySelector('cs-badge')?.classList.contains('cs-badge--success')).toBe(true);
    expect(root.querySelector('cs-progress')?.getAttribute('aria-valuenow')).toBe('3');
    expect((root.querySelector('.cs-progress__value') as HTMLElement).style.width).toBe('60%');
  });
});

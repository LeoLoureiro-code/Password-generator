import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrenghtStateComponent } from './strenght-state.component';

describe('StrenghtStateComponent', () => {
  let component: StrenghtStateComponent;
  let fixture: ComponentFixture<StrenghtStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrenghtStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrenghtStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

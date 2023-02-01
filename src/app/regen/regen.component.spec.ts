import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegenComponent } from './regen.component';

describe('RegenComponent', () => {
  let component: RegenComponent;
  let fixture: ComponentFixture<RegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodComponent } from './wood.component';

describe('WoodComponent', () => {
  let component: WoodComponent;
  let fixture: ComponentFixture<WoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

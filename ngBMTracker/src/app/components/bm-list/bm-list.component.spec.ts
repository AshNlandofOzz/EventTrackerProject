import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMListComponent } from './bm-list.component';

describe('BMListComponent', () => {
  let component: BMListComponent;
  let fixture: ComponentFixture<BMListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

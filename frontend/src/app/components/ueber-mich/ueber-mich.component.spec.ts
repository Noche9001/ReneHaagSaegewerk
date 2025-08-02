import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeberMichComponent } from './ueber-mich.component';

describe('UeberMichCompinent', () => {
  let component: UeberMichComponent;
  let fixture: ComponentFixture<UeberMichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UeberMichComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UeberMichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

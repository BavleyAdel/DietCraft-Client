import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionInDetailComponent } from './nutrition-in-detail.component';

describe('NutritionInDetailComponent', () => {
  let component: NutritionInDetailComponent;
  let fixture: ComponentFixture<NutritionInDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionInDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionInDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

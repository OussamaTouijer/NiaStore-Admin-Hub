import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproduitComponent } from './newproduit.component';

describe('NewproduitComponent', () => {
  let component: NewproduitComponent;
  let fixture: ComponentFixture<NewproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewproduitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

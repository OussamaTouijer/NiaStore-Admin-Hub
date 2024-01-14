import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewacheteurComponent } from './newacheteur.component';

describe('NewacheteurComponent', () => {
  let component: NewacheteurComponent;
  let fixture: ComponentFixture<NewacheteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewacheteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewacheteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewventeComponent } from './newvente.component';

describe('NewventeComponent', () => {
  let component: NewventeComponent;
  let fixture: ComponentFixture<NewventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewventeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postcom } from './postcom';

describe('Postcom', () => {
  let component: Postcom;
  let fixture: ComponentFixture<Postcom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Postcom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Postcom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

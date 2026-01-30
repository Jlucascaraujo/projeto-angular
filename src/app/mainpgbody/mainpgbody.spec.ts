import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainpgbody } from './mainpgbody';

describe('Mainpgbody', () => {
  let component: Mainpgbody;
  let fixture: ComponentFixture<Mainpgbody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainpgbody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainpgbody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

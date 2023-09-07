import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchaComponent } from './matcha.component';

describe('MatchaComponent', () => {
  let component: MatchaComponent;
  let fixture: ComponentFixture<MatchaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchaComponent]
    });
    fixture = TestBed.createComponent(MatchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

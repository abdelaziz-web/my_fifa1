import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFootComponent } from './home-foot.component';

describe('HomeFootComponent', () => {
  let component: HomeFootComponent;
  let fixture: ComponentFixture<HomeFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

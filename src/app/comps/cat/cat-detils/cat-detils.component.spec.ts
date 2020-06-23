import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDetilsComponent } from './cat-detils.component';

describe('CatDetilsComponent', () => {
  let component: CatDetilsComponent;
  let fixture: ComponentFixture<CatDetilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatDetilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

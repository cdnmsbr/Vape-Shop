import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewcartPage } from './viewcart.page';

describe('ViewcartPage', () => {
  let component: ViewcartPage;
  let fixture: ComponentFixture<ViewcartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

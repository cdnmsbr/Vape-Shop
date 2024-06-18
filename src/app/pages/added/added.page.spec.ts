import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddedPage } from './added.page';

describe('AddedPage', () => {
  let component: AddedPage;
  let fixture: ComponentFixture<AddedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarComponentComponent } from './criar-component.component';

describe('CriarComponentComponent', () => {
  let component: CriarComponentComponent;
  let fixture: ComponentFixture<CriarComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarComponentComponent]
    });
    fixture = TestBed.createComponent(CriarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

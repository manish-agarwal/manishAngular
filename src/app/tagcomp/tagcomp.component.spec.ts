/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TagcompComponent } from './tagcomp.component';

describe('TagcompComponent', () => {
  let component: TagcompComponent;
  let fixture: ComponentFixture<TagcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

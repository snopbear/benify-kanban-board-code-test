/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { KanbanBoardSignalsComponent } from './kanban-board-signals.component';


describe('KanbanBoardComponent', () => {
  let component: KanbanBoardSignalsComponent;
  let fixture: ComponentFixture<KanbanBoardSignalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KanbanBoardSignalsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanBoardSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

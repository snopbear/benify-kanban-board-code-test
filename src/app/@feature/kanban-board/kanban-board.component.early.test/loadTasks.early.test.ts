
// Unit tests for: loadTasks



import { TaskService } from '@services-common/task/task.service';

import { KanbanBoardComponent } from '../kanban-board.component';

import { of } from 'rxjs';


describe('KanbanBoardComponent.loadTasks() loadTasks method', () => {
  let component: KanbanBoardComponent;
  let mockTaskService: jest.Mocked<TaskService>;

  beforeEach(() => {
    mockTaskService = {
      tasks: of([
        { text: 'Task 1', status: 'To Do' },
        { text: 'Task 2', status: 'Implementing' },
        { text: 'Task 3', status: 'Done' },
      ]),
      updateTask: jest.fn(),
      addTask: jest.fn(),
      fetchTasks: jest.fn(),
    } as unknown as jest.Mocked<TaskService>;

    component = new KanbanBoardComponent(mockTaskService);
  });

  describe('Happy Path', () => {
    it('should correctly distribute tasks into their respective columns based on status', () => {
      // Arrange
      const expectedColumns = [
        { title: 'To Do', status: 'To Do', tasks: [{ text: 'Task 1', status: 'To Do' }] },
        { title: 'Implementing', status: 'Implementing', tasks: [{ text: 'Task 2', status: 'Implementing' }] },
        { title: 'Done', status: 'Done', tasks: [{ text: 'Task 3', status: 'Done' }] },
      ];

      // Act
      component.loadTasks();

      // Assert
      expect(component.columns).toEqual(expectedColumns);
    });
  });

  describe('Edge Cases', () => {
    it('should handle an empty task list without errors', () => {
      // Arrange
      mockTaskService.tasks = of([]);

      // Act
      component.loadTasks();

      // Assert
      component.columns.forEach(column => {
        expect(column.tasks).toEqual([]);
      });
    });

    it('should handle tasks with statuses not matching any column', () => {
      // Arrange
      mockTaskService.tasks = of([
        { text: 'Task 4', status: 'Unknown' },
      ]);

      // Act
      component.loadTasks();

      // Assert
      component.columns.forEach(column => {
        expect(column.tasks).toEqual([]);
      });
    });

    it('should handle tasks with null or undefined status', () => {
      // Arrange
      mockTaskService.tasks = of([
        { text: 'Task 5', status: null },
        { text: 'Task 6', status: undefined },
      ]);

      // Act
      component.loadTasks();

      // Assert
      component.columns.forEach(column => {
        expect(column.tasks).toEqual([]);
      });
    });
  });
});

// End of unit tests for: loadTasks

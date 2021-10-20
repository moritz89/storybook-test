import { render } from '@testing-library/angular';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
// import { InboxScreenComponent } from './components/inbox-screen.component';
// import { PureInboxScreenComponent } from './components/pure-inbox-screen.component';
// import { TaskListComponent } from './components/task-list.component';
// import { PureTaskListComponent } from './components/pure-task-list.component';
// import { TaskComponent } from './components/task.component';

// describe('App', () => {
//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent,
//         InboxScreenComponent,
//         PureInboxScreenComponent,
//         TaskListComponent,
//         PureTaskListComponent,
//         TaskComponent,
//       ]
//     }).compileComponents();
//   }));

//   test('should render the App component', async () => {
//     const { getByText } = await render(AppComponent);
//     expect(getByText('Welcome'));
//   });
// })
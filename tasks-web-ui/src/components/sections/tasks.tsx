import { type Dispatch } from 'react';
import { tasksApi } from '../../api';
import Task from '../task';
import type { Task as ITask } from '../../types';

export type TasksSectionProps = {
  tasks: ITask[];
  setTasks: Dispatch<React.SetStateAction<ITask[]>>;
};

export default function TasksSection({ setTasks, tasks }: TasksSectionProps) {
  return (
    <section className='flex flex-col gap-4'>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onRemove={() => {
            tasksApi.remove(task.id).then(() => {
              setTasks((prev) => prev.filter((item) => item.id !== task.id));
            });
          }}
          onCompletionChange={(completed) => {
            tasksApi.update(task.id, { completed });
          }}
        />
      ))}
    </section>
  );
}

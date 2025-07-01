import type { Task } from '../../types';
import { Card } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { TrashIcon } from 'lucide-react';
import { Button } from '../ui/button';
import type { Task as ITask } from '../../types';
import { useState } from 'react';

export type TaskProps = {
  task: Task;
  onRemove: (task: ITask) => void;
  onCompletionChange: (completed: boolean) => void;
};

export default function Task({
  task,
  onRemove,
  onCompletionChange,
}: TaskProps) {
  const [completed, setCompleted] = useState<boolean>(task.completed);

  return (
    <Card className={`flex flex-row items-center justify-between p-4`}>
      <p className={`${completed ? 'line-through italic' : ''}`}>{task.name}</p>
      <div className='flex flex-row gap-4 items-center'>
        <Checkbox
          className='size-6'
          checked={completed}
          onCheckedChange={() => {
            setCompleted(!completed);
            onCompletionChange(!completed);
          }}
        />
        <Button
          variant={'secondary'}
          size={'icon'}
          className='hover:cursor-pointer bg-red-400'
          onClick={() => onRemove(task)}
        >
          <TrashIcon />
        </Button>
      </div>
    </Card>
  );
}

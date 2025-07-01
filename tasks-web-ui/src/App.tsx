import { Suspense, useState, useEffect } from 'react';
import { Header, Footer, TasksSection } from './components';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Plus } from 'lucide-react';
import { tasksApi } from './api';
import type { Task as ITask } from './types';

function App() {
  const [taskName, setTaskName] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    tasksApi.find().then((res) => setTasks(res));
  }, []);

  return (
    <>
      <Header />
      <main className='flex flex-col items-center p-4'>
        <div className='w-150 flex flex-col gap-8'>
          <section className='flex gap-2'>
            <Input onChange={(e) => setTaskName(e.currentTarget.value)} />
            <Button
              variant={'secondary'}
              size={'icon'}
              className='hover:cursor-pointer bg-green-400'
              onClick={() => {
                tasksApi
                  .create({
                    name: taskName,
                  })
                  .then((newTask) => {
                    setTasks([...tasks, newTask]);
                  });
              }}
            >
              <Plus />
            </Button>
          </section>
          <Suspense fallback={<h1>Loading...</h1>}>
            <TasksSection tasks={tasks} setTasks={setTasks} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

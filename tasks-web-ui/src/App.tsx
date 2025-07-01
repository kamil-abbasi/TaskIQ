import { Header, Footer } from './components';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Plus } from 'lucide-react';

function App() {
  return (
    <>
      <Header />
      <main className='flex flex-col items-center'>
        <section className='flex w-150 gap-2'>
          <Input />
          <Button
            variant={'secondary'}
            size={'icon'}
            className='hover:cursor-pointer'
          >
            <Plus />
          </Button>
        </section>
        <section></section>
      </main>
      <Footer />
    </>
  );
}

export default App;

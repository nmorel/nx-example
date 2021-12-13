import styles from './app.module.css';
import { Button } from '@nx-klaxoon/components';
import { Coco } from '@nx-klaxoon/coco';

export function App() {
  return (
      <>
        <header>
          Hello
        </header>
        <main>
          <h1>Main page</h1>
          <Button className={styles['my-button']} onClick={() => alert('ok !')}>Click me !</Button>
          <Coco />
        </main>
      </>
  );
}

export default App;

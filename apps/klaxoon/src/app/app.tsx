import styles from './app.module.css';
import { Button } from '@nx-klaxoon/components';

export function App() {
  return (
      <>
        <header>
          Hello
        </header>
        <main>
          <h1>Main page</h1>
          <Button className={styles['my-button']} onClick={() => alert('ok !')}>Click me !</Button>
        </main>
      </>
  );
}

export default App;

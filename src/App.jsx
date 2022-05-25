import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, For, createEffect } from 'solid-js';
import { fetchLastPills, fetchUsers } from './database';

function App() {

  const [ pills, setPills ] = createSignal([])
  createEffect(async () => {
    const data = await fetchLastPills(3, 'it')
    setPills(data)
  })

  const [ users, setUsers ] = createSignal([])
  createEffect(async () => {
    const data = await fetchUsers(100)
    setUsers(data)
  })

  return (
    <>
      <For each={pills()}>{(pill, i) =>
        <>
          <h1>{i() + 1}: {pill.it_title}</h1>
          <h2>{pill.it_summary}</h2>
          <par>{pill.it_content}</par>
        </> 
      }</For>
    </>
  );
}

export default App;

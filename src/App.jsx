import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, For, createEffect } from 'solid-js';
import { fetchLastPills, fetchUsers } from './database';
import { pills, setPills } from './store'
import { NavBar } from './components/NavBar';
import { Tag } from './components/Tag';
import { Footer } from './components/Footer';

function App() {

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
      <NavBar/>
      <For each={pills()}>{(pill, i) =>
        <>
          <h1 class="text-3xl text-red-400 text-center">[{i() + 1}] {pill.it_title}</h1>
          <h2 class="text-2xl text-center">{pill.it_summary}</h2>
          <h3 class="text-1xl text-center py-4">{pill.it_content}</h3>
          <Tag text="ciao" color="red" />
        </> 
      }</For>
      <Footer/>
    </>
  );
}

export default App;

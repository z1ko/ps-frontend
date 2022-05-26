import { createEffect, createSignal } from "solid-js"
import { CURRENT_LANGUAGE } from "../../store"
import { fetchLastPills } from "../../database"
import { Card } from "./Card"

// Rappresenta una collezione di 4 pillole in prima pagina
export function Line() {

    let [ lastPills, setLastPills ] = createSignal([])
    createEffect(async () => {
        const res = await fetchLastPills(4, CURRENT_LANGUAGE)
        setLastPills(res)
    })

    return <>
        <section class="bg-black px-60 py-5">
            <h1 class="text-white text-bold text-3xl mb-5">Le ultime pillole inserite</h1>
            <div class="flex flex-warp justify-between">
                <For each={lastPills()}>{(pill, i) => 
                    <Card pill={pill}/>
                }</For>
            </div>
        </section>
    </>
}
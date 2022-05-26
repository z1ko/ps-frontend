import { createEffect, createSignal, For } from "solid-js";
import { fetchLastPills } from "../../database";
import { Card } from "../pills/Card";


export function Pills() {

    const [ getPills, setPills ] = createSignal([])
    createEffect(async () => {
        const pills = await fetchLastPills(4, 'it')
        setPills(pills)
    })

    return(
        <section class="bg-black max-h-50vh">
            <h1 class="text-white font-bold text-4xl py-10 px-10">Le nostre ultime pillole</h1>
            <div class="flex flex-wrap justify-around space-y-5">
                <For each={getPills()}>{(pill, i) =>
                    <Card pill={pill}/>
                }</For>
            </div>
        </section>
    )
}
import { createClient } from "@supabase/supabase-js";

const URL = import.meta.env.VITE_SUPABASE_URL
const KEY = import.meta.env.VITE_SUPABASE_KEY

console.log('login in supabase at url ', URL)
const supabase = createClient(URL, KEY)

// Ottiene le pillole del giorno
export async function fetchLastPills(count, lang) {

    // Ottiene il risultato nella lingua corretta
    let selector = `${lang}_title, ${lang}_summary, ${lang}_content`
    const { data } = await supabase
        .from('ps_pill')
        .select(selector)
        .limit(count)

    console.log(`getting last ${count} pills: `, data)
    return data
}

// Ottiene tutti gli utenti registrati
export async function fetchUsers(count) {

    const { data } = await supabase
        .from('ps_user')
        .select('name, surname, ps_email_identity(email)')
        .limit(count)

    console.log(`getting ${count} users: `, data)
    return data
}
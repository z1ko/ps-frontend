
export function Tag({text, color}) {
    let style = `bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900`
    return <>
        <span class={style}>{text}</span>
    </>
}



export function Card({ pill }) {

    return <>
        <div class="flex justify-center min-w-sm">
            <div class="bg-white max-w-sm">
                <a href="#!">
                    <img class="" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                </a>
                <div class="flex justify-between px-5 pt-2">
                    <p class="text-gray-600">Lettura di 1 minuto</p>
                    <p class="text-gray-600">Andrea Tornelli</p>
                </div>
                <div class="p-5">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{pill.it_title}</h5>
                    <p class="text-gray-700 text-base mb-4">
                    {pill.it_summary}
                    </p>
                </div>
            </div>
        </div>
    </>
}
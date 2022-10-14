export default function GoTo({ id, text }) {
    return (
        <div
            class="px-2
                   text-1xl
                   text-slate-500
                   lg:text-2xl"
        >
            <a
                onClick={() =>
                    document
                        .getElementById(id)
                        .scrollIntoView({ behavior: "smooth" })
                }
                class="cursor-pointer hover:text-red"
            >
                {text}
            </a>
        </div>
    );
}

export default function GoTo({ href, text }) {
    return (
        <div class="px-2 text-1xl text-slate-500 lg:text-2xl">
            <a class="hover:text-red" href={href}>
                {text}
            </a>
        </div>
    );
}

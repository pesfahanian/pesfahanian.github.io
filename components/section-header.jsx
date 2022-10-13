export default function SectionHeader({ title }) {
    return (
        <div>
            <h1
                class="font-bold
                       text-transparent
                       text-4xl
                       bg-clip-text
                       bg-primary
                       dark:bg-teal
                       lg:text-6xl"
            >
                {title}
            </h1>
            <hr class="my-4 border-teal" />
        </div>
    );
}

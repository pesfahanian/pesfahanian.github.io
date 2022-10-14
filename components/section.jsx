export default function Section({ id, content }) {
    return (
        <section
            id={id}
            class="flex
                   items-center
                   justify-center
                   min-h-screen
                   bg-white
                   dark:bg-primary"
        >
            <div class="min-w-[50%] px-4">{content}</div>
        </section>
    );
}

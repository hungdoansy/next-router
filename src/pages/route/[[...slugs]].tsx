import { GetServerSidePropsContext } from "next"

type PageProps = {
    text: string
}
export default function Page({ text }: PageProps) {
    return (
        <main className="flex flex-col items-center justify-between mt-16 px-24">
            <span className="text-3xl">slugs: {text}</span>
        </main>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { query } = context
    const slugs = query.slugs

    console.log({slugs})

    return {
        props: {
            text: typeof slugs === "undefined" ? "undefined" : JSON.stringify(slugs)
        },
    }
}

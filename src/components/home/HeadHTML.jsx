import Head from 'next/head'

export default function HeadHTML() {
    return (
        <Head>
            <title>CatWiki</title>
            <meta name="description" content="The catWiki created by Marina Cid" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
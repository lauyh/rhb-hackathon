import Head from 'next/head'

export const AppTitle = ({ sub }) => {
    const msg = `${sub ? `${sub} | ` : ''}Team 16 - Liquidated by OPR`

    return (
        <Head>
            <title>{msg}</title>
        </Head>
    )
}

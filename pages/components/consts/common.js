import Head from 'next/head'

export const AppTitle = ({ sub }) => (
    <Head>
        <title>{sub ? `${sub} | ` : ''}Team 16 - Liquidated by OPR</title>
    </Head>
)

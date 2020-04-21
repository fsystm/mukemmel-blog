import Head from 'next/head'

function Layout({ children }) {
    return <div>
        <Head>
            <title>Emirhan Akpınar</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-flat.css" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open Sans" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>

        
        <main>
            {children}
        </main>

        <footer className="w3-container w3-dark-grey">
            <p>Powered by <u>Emirhan Akpınar</u></p>
        </footer>
    </div>
}
export default Layout
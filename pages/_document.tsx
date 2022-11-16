import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="keywords" content={"Website development, Application Development, DevOps Services, Application Modernization, Mobile Application Development, Digital Transformation"} />
                    <meta name="description" content={"Full-cycle vision development cycle of the impact of software on developing your business to the next level, building cutting edge tailor made software solutions"} />
                    <meta charSet="utf-8" />
                    <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300&family=Noto+Sans:wght@300&family=Roboto:wght@700&display=swap"
                        rel="stylesheet" />
                    <link rel="shortcut icon" href={'./images/logo.png'} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
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
                    <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300&family=Noto+Sans:wght@300&family=Roboto:wght@700&display=swap"
                        rel="stylesheet" />
                    <link rel="shortcut icon" href={'./images/logo.png'} />
                    <title>Vision Is Primary</title>
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
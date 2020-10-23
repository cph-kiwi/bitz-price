import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
            <link rel="stylesheet"
            href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </Head>
<Navbar/>
<div className="container"> {/* adding a container here works like adding a margin - it pushes the text to the right */}
{props.children}
</div>
    </div>
);

export default Layout;
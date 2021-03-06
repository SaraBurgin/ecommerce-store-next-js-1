import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Finde Me Beauty</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {props.children}
      <Footer />
    </div>
  );
};
export default Layout;

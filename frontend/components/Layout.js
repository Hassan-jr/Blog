import React from "react";
import Nav from "./Nav";
import { wrapper } from "../components/Redux/store";
import Footer from "./Footer";
import Script from "next/script";

const Layout = ({ children }) => {
  // <!-- Global site tag (gtag.js) - Google Analytics -->
  // <script async src="https://www.googletagmanager.com/gtag/js?id=UA-198293761-2"></script>
  // <script>
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());

  //   gtag('config', 'UA-198293761-2');
  // </script>

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-198293761-2`}
      />
      <Script id="my-script" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
       
           gtag('config', 'UA-198293761-2');
        `}
      </Script>
      <div className="flex flex-col min-h-screen">
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default wrapper.withRedux(Layout);

import React from "react";
import Head from "next/head";

interface HeadProps {
  title: string;
  description: string;
}

interface LayoutProps {
  headProps: HeadProps;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ headProps, children }) => {
  return (
    <>
      <Head>
        <title>{headProps.title}</title>
        <meta name="description" content={headProps.description} />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;

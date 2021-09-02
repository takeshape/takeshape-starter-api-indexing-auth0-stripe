import React from 'react';
import { Flex, Container } from 'theme-ui';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import CartPreview from './cart-preview';
import useCheckout from '../lib/hooks/use-checkout';

const Layout = ({ children }) => {
  useCheckout();
  return (
    <Flex variant="layout.page">
      <Head>
        <title>TakeShape Starter for Auth0 &amp; Stripe</title>
      </Head>

      <Header />

      <Container as="main" variant="layout.main">
        {children}
      </Container>

      <CartPreview />

      <Footer />

      <style jsx global>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        }
      `}</style>
    </Flex>
  );
};

export default Layout;

import * as React from 'react';
import Header from './header';
import Footer from './footer';
import Grid from './grid';

const Layout = (props) => {
    return (
    <>
    <Grid>
    <Header/>
        {props.children}
    <Footer/>
    </Grid>
    </>
    )
};

export default Layout;
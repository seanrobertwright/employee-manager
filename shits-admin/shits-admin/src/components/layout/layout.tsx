import * as React from 'react';
//import { useSelector } from 'react-redux';
import { Layout, LayoutProps } from 'react-admin';
import CustomAppBar from './appbar';
import Menu from './menu';
//import { darkTheme, lightTheme } from './themes';
//import { AppState } from '../types';

export default (props: LayoutProps) => {
    //const theme = useSelector((state: AppState) =>
      //  state.theme === 'dark' ? darkTheme : lightTheme
    //);
    return <Layout {...props} appBar={CustomAppBar} menu={Menu} />;
};
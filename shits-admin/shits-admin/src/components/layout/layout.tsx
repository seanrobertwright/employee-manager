import { Layout, LayoutProps } from 'react-admin';
import CustomAppBar from './appbar';
import Menu from './menu';

export default (props: LayoutProps) => {
    
    return <Layout {...props} appBar={CustomAppBar} menu={Menu} />;
};
import Footer from "./Footer";
import Header from "./Header";

import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }){
    return(
        <div>
            <Header/>
            <div >
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;
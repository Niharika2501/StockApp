import React from 'react';
import Header from './Header';
import Footer from './Footer';
import StockDetails from './StockDetails';
class StockApp extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <StockDetails/>
                <Footer/>
            </div>
        )
    }
};
export default StockApp;
import React from 'react';
import ItemInput from './ItemInput/ItemInput';
import ItemList from './ItemList/ItemList';
import './Home.css';

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3"><ItemInput /></div>
                <div className="col-xs-12 col-sm-6 col-md-8 col-lg-9"><ItemList itemList={[1,23,4,5,6]}/></div>
            </div>
        </div>);
}

export default Home;
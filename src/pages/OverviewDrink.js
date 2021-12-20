import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import OverviewDrinkItems from '../components/OverviewDrinkItems.js';


class OverviewDrink extends React.Component {
    render() {
        return (
            <section>
                <Header />
                <OverviewDrinkItems />
                <OverviewDrinkItems />
                <OverviewDrinkItems />
                <OverviewDrinkItems />
                <OverviewDrinkItems />
                <OverviewDrinkItems />
                <OverviewDrinkItems />
                <Footer />
            </section>
        );
    }
}

export default OverviewDrink;
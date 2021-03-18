import React, {Component} from 'react';
import {connect} from 'react-redux';
import CarteListe from '../src/composants/carteliste/CarteListe' ;
import SearchBar from "./composants/searchbar/search";
import './app.css'
import Scroll from "./utilities/scrol";
import ErrorBoundry from "./composants/errorboundry";
import {searchRobots,fetchingData} from './redux/actions/actions';
import Clock from "./composants/Clock/clock";

class App extends Component {
    componentDidMount() {
        const {fetchRobots} = this.props;
     fetchRobots();
    }

    onChange = (even) => {
        this.props.searchRobots(even);
    }

    render() {
        const {searchField,searchRobots,robots} = this.props;

        const filtred = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
            <div className={"tc pa2 ma2 "}
                 style={{backgroundImage: "linear-gradient(to right, #193705, #35600e, #568c14, #7dbb16, #a8eb12)"}}>
                <h1 className={"f1 b black serif"}>ROBOTS FRIENDS</h1>
                <SearchBar changed={searchRobots}/>
                <Clock />
                <Scroll>
                    <ErrorBoundry>
                    <CarteListe data={filtred}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}
const mapStateToProps = (state)=>({
    searchField : state.searchRobots.searchField,
    robots : state.fetchReducer.data,
});
const mapDispatchToProps = (dispatch)=>({
    searchRobots :(event)=> dispatch(searchRobots(event)),
    fetchRobots : ()=> fetchingData(dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(App);

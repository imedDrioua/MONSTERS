import React,{Component} from 'react'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDay : new Date(),
        }
    }
    tick=()=>{
            this.setState({toDay : new Date()})
    }
    componentDidMount(){
        this.intervallID=setInterval(
            () => this.tick(),
            1000
        );
        }
        componentWillUnmount(){
        clearInterval(this.intervallID);
}
    render(){
        const {toDay}= this.state;

        return(
            <div className={"bg-light-green ba tc ma3 serif "}>
                <h1>{
                    `${toDay.getHours()} : ${toDay.getMinutes()} : ${toDay.getSeconds()}`
                }</h1>

            </div>
        );
    }
}
export default Clock;
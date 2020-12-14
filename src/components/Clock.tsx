import React from 'react';

//Type Aliases rename types and are more common in react applications than interfaces
type ClockState = {
    time: Date
}
//Date is a type that is built into TypeScript, just like strings, numbers, booleans, unions, tuples, etc

type AcceptedProps = {
    testProp: string,
    optionalProp?: string
};
//question mark means optional propr

                                     //always props first then state
class Clock extends React.Component<AcceptedProps, ClockState> {
    constructor(props: AcceptedProps){
        super(props)
    }

    tick() {
        this.setState({
            time: new Date()
        })
    };

    componentWillMount() {
        this.tick();
    };
   
   componentDidMount() {
        setInterval(() => this.tick(), 1000);
   };

    render(){
        return(
            <div>
            <h1>{this.state.time.toLocaleTimeString()}</h1>
            <p>{this.props.testProp}</p>
            <p>{this.props.optionalProp}</p>
            </div>
        )
    }
}

export default Clock;
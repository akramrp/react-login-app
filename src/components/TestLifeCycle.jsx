import { Button, Typography } from '@mui/material'
import React from 'react'
import TestStudent from './TestStudent'

class TestLifeCycle extends React.Component{
    constructor(){
        super()
        this.state = {
            data:"---this is class component 1st data",
            counter: 0,
            student: true
        }
        console.log('1 time call constructure')
    }

    componentDidMount(){
        console.log('3 time calling componentDidMount bcoz.. componentDidMount call after render html (making DOM) so we always call all apis in this section')
        // call all apis here
    }

    componentDidUpdate(preProps, preState, snapshot){
        /*
        preProps: return previous props     _____same work as state
        preState: return previous state
        snapshot: return undefinied
        */
       if(preState.data !== this.state.data)
        console.log('This is previous state date when not equal current state data: ', preState)
       else
        console.log('This is previous state date when equal current state data: ', preState)
        
        console.log('4 componentDidUpdate call when any change in componet(props, state)')
        // use condition here otherwise its calling looping or goes to enfinite loop. 
        // call props and state here
    }

    shouldComponentUpdate(){
        /*
            return true : when return true it update state
            return false: when return false it not update state
        */
       console.log('shouldComponentUpdate:', this.state.counter)
       return true;
    }

    componentWillUnmount(){
        window.alert('componentWillUnmount')
    }

    render(){
        console.log('2 time call render after constructor')
        return (
            <>
                <h1>hello,  {this.state.data}</h1>
                <Button variant='contained' onClick={()=>this.setState({data:'---this is state change 2nd date. in this section call render not componentDidMount bcoz component alreay DidMount'})} > update name State</Button>
                <Typography variant='h3'>Counter: {this.state.counter}</Typography>
                <Button variant='contained' onClick={()=>this.setState({counter: this.state.counter+1})}>counter</Button>
                
                { 
                    this.state.student 
                    ? <TestStudent /> 
                    : 'Remove Student from DOM' 
                }
                <Button variant='contained' onClick={()=>this.setState({student: !this.state.student})}>componentWillUnmount</Button>
            </>
        )
    }
}
export default TestLifeCycle;
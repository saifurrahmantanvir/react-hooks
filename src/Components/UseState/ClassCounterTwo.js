import React, { Component } from 'react';

class ClassCounterTwo extends Component {
   constructor(props) {
      super(props)

      this.state = {
         count: 0
      }
   }

   incrementCount = () => {
      this.setState((prevState) => {
         return { count: prevState.count + 5 }
      })
   }

   render() {
      return (
         <div>
            <button onClick={this.incrementCount} className='button'>Count {this.state.count}</button>
         </div>
      )
   }
}

export default ClassCounterTwo;

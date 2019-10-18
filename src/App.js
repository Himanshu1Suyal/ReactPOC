import React from 'react';
//import PropTypes from 'prop-types';

//Use of setState Component


class App extends React.Component {

constructor (){
  super();
this.state = {
   count :0
}
    this.incrementCounter= this.incrementCounter.bind(this)

}

incrementCounter() {
                      this.setState({
                        count : this.state.count + 2
                        
                      });
                      console.log(this.state.count);
                    }
                    

render() {
            const { count } = this.state;
            return(
              <section>
                {count}
                  <button onClick = {this.incrementCounter}>Add Button</button>
              </section>

            )
          }
        }
          export default App;

























//    constructor(){
//     super();

//             this.state={
//               data : []
//             }
//             this.setStateHandler = this.setStateHandler.bind(this);
//    };
//    setStateHandler() {
//                         var item="Set the data  , ";
//                         var myArray = this.state.data.slice();
//                         myArray.push(item);
//                         this.setState({ data: myArray})
//                     };

//                     render() {
//                       return (
//                         <div>
//                               <button onClick= { this.setStateHandler}>SET STATE</button>
//                               <h2>  State Array : {this.state.data}</h2>

//                         </div>
//                       );
//                     }

// }

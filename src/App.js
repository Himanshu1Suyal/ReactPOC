import React from 'react';

class App extends React.Component {
   render() {
     var i=1;
      return (
         <div>
           <h1>
             {i===1 ? 'true' :'False'}
           </h1>
         </div>

      );
   }
}
export default App;
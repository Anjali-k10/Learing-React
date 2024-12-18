import React from 'react';
import ReactDOM from 'react-dom/client';


    
// const heading= React.createElement('h1',{id:'head'},"hey from anjali");
// root.render(heading);

const HeadingElement2=()=>(<h1>hello i am  function2</h1>)
const HeadingElement=()=>(
   <div id="container">
   <HeadingElement2/>
<h1>hello i am  function</h1>
 </div>
)
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingElement/>);



const parentdiv=React.createElement('div',{id:"div1"},
    React.createElement('div',{id:"div2"},
        [ React.createElement('h1',{id:"head",className:"is"},'hello world!'),React.createElement('h1',{id:"head",className:"that"},'hello!')]
    ));
    
    const root1=ReactDOM.createRoot(document.getElementById('parent'));
    root1.render(parentdiv);
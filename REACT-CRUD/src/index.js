import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*class LearnReactprops extends React.Component {
  render () {
    return <div><h1>Learn {this.props.topic}</h1>
    <button type="button" onClick={this.changevalue}> changevalue </button>
<button type="button" onClick={this.deleteheader}> deleteheader</button>

    </div>
  }
  deleteheader =()=>
  {
  this.setState ({value: false name:false});

  }
changevalue = () => {
  this.setState ({value: 'new value'});
}
componentWillMount ()
{
  alert ('learn react lifecycle');
}
componentWillUpdate()
{
  alert ('Update value');

}
shouldComponentUpdate()
{
  return true;
}
componentDidUpdate ();
{
  document.getElementById("root").innerHTML="newvalue updated"+this.state.value;
}
componentWillUnmount ();
{
  alert ('headerdeleted');
}

}
 
ReactDOM.render (
  <LearnReactprops topic="ReactJs" App />,
  document.getElementById ('root')
);
componentDidMount ()
{
  setTimeout(()=>{this.setState({value:"thankyou"})},5000)
}
shouldComponentUpdate()
*/
ReactDOM.render (
  <React.StrictMode>

    <App />

  </React.StrictMode>,
  document.getElementById ('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();

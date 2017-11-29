import React from 'react';
import ReactDOM from 'react-dom';

const Info = ({info}) => (
  <div>
    <h1>Info</h1>
    <p>some info: {info}</p>
  </div>
);

const WithAdminWarning = (WrappedComponent) => ({info, isAdmin}) => (
  <div>
  {isAdmin && <p>this is restricted area!</p>}
  <WrappedComponent info={info} />
  
  </div>
)

const WithAuth = (Component) => ({isAuthenticated, ...rest}) => (

  <div>
  {isAuthenticated && <Component {...rest} />} 
  {!isAuthenticated && <p>restricted Area, go Authenticate yourself first !!!</p>} 
  </div>
)

const AdminInfo = WithAdminWarning(Info)
const AuthInfo = WithAuth(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info="ssdf" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="yeyeyyeyey" />, document.getElementById('app'));

import * as React from 'react';

export interface AppProps
{
  name: string,
};

export default class App extends React.Component<AppProps, any>
{
  render()
  {
    return (
      <h1>Hello, {this.props.name}!</h1>
    );
  }
};

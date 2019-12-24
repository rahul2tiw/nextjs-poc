import React from 'react'

import Paragraph from '../components/paragraph'
import Post from '../components/post'
import ListItem from '../components/listItem'
import Button from '../components/button'

// This is an array where we will put in all the components for the library
const list = [{
  id: 1,
  label: 'Button',
  component: <Button label='New Button' onPress={()=>{alert('You have cicked the button')}}></Button>,
  display: "<Button label='New Button'></Button>",
  props: {label: 'This is used to provide a label to the button', onPress: 'Event which gets fired when click is triggered'}
},
{
  id: 2,
  label: 'Paragraph',
  component: <Paragraph>This is a paragraph</Paragraph>,
  display: "<Paragraph>This is a paragraph</Paragraph>"
}]

export default class Library extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: list[0]
    }
  }

  // This method renders all the properties in the component that are written in the list
  renderProperties = (properties) => {
    const keys = Object.keys(properties)
    const arr = []
    for (const key in keys) {
      const renderSingleProperty = <div>{keys[key]}: {properties[keys[key]]}</div>
      arr.push(renderSingleProperty)
    }
    return (<React.Fragment>
      {arr}
    </React.Fragment>)
  }

  render() {
    const { selected } = this.state

    return (
      <div className="main">
        <div className="leftContainer">
          {list.map(item => {
            return (<ListItem
              title={item.label}
              onPress={() => this.setState({selected: item})} />)
          })}
        </div>
        <div className="leftContainer">
          <Post>
            <div>The component</div>
            <div class="component"> {selected.component} </div>
            HOW TO USE:
            <div>{selected.display}</div>
            Properties:
            {selected.props && (<div>
              {this.renderProperties(selected.props)}
            </div>)}
          </Post>

        </div>
        <style jsx>{`
      .main {
        columns: 2 auto;
      }

      .leftContainer: {
          flex:1
      }
      hr {
        width: 100px;
        border-width: 0;
        margin: 20px auto;
        text-align: center;
      }

      hr::before {
        content: '***';
        color: #ccc;
      }
    `}</style>
      </div>)
  }
}


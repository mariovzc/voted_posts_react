import React, { Component } from 'react'
import { Button, ButtonGroup } from 'reactstrap'

class OrderButtons extends Component {
  render () {
    return (
      <div className='text-center'>
        <ButtonGroup>
          <Button
            color='primary'
            onClick={() => this.props.ascOrder('ASC')}
            active={this.props.status === 'ASC'}
          >
            Ascendente
          </Button>
          <Button
            color='primary'
            onClick={() => this.props.descOrder('DESC')}
            active={this.props.status === 'DESC'}
          >
            Descendente
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default OrderButtons

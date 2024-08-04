import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    const {item, handleChange, handleSubmit, editItem } = this.props

    return (
      <div className='card card-body mt-3'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
              <div className='input-group-text bg-primary text-white'>
                  <i className='fas fa-book'/>
              </div>
            <input type='text'
                   placeholder='Enter todo items'   className='form-control text-capitalize'
                  //  value={this.props.item} //instead use
                  value={item}
                  onChange={handleChange}
            />
          </div>
          <div className='list-group'>
            <button type='submit'
                    className={editItem ?
                        'btn btn-sm btn-block btn-success mt-3' : 'btn btn-sm btn-block btn-primary mt-3'}
            >

              {editItem ? 'Edit Item' : 'Add Item'}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

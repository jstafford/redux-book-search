// @flow
import React, {Component} from 'react'
import prohibited_image from '../images/prohibited.svg'

class Book extends Component<{
  item: Object,
  displayMode: string,
}> {
  render () {
    const {item, displayMode} = this.props
    const link = item.volumeInfo.canonicalVolumeLink
    const title = item.volumeInfo.title
    const image = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ?
      item.volumeInfo.imageLinks.thumbnail :
      prohibited_image

    if (displayMode === 'THUMBNAIL') {
      return (
        <a href={link} style={{padding: '25px'}}>
          <img src={image}
            style={{
              boxShadow: '3px 3px 3px #686868',
              marginBottom: '15px',
            }}
            alt={title} />
        </a>
      )
    } else {
      return (
        <div style={{marginTop: '20px'}}>
          <a href={link} style={{padding: '25px'}}>
            {title}
          </a>
        </div>
      )
    }
  }
}

export default Book

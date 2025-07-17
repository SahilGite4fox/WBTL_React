import React from 'react';

const CommonTitle = (props) => {

    const parts = props.title.split('*');

  return (
    <h4>
      {parts.length > 1 ? (
        <>
          <span>{parts[1]}</span> {parts[2] || ''}
        </>
      ) : (
        props.title
      )}
    </h4>
  )
}

export default CommonTitle

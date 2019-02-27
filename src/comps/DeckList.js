import React from 'react';

export default( props ) => {
  const { decks = [] } = props;

  return (
    <div>
      <h2>Hello DeckList</h2>
      <h3>
        {decks.length}
      </h3>
    </div>


  )
};

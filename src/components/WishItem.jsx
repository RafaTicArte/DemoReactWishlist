import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

/**
 * Callback to run when a wish changes.
 * @callback onDoneChange - Callback to run when a wish changes.
 * @param {Object} updatedWish - Wish updated.
 * @param {String} updatedWish.id - Identifier of a wish.
 * @param {String} updatedWish.text - Text of a wish.
 * @param {Boolean} updatedWish.done - Done/Pending wish.
 */

/**
 * Render a wish.
 * @param {Object} wishItem - Wish.
 * @param {String} wishItem[].id - Identifier of a wish.
 * @param {String} wishItem[].text - Text of a wish.
 * @param {Boolean} wishItem[].done - Done/Pending wish.
 * @param {onDoneChange} callback - Callback to run when a done/pending wish changes.
 */
function WishItem({ wishItem, onDoneChange }) {
  useEffect(() => {
    console.log(`Render WishItem: ${wishItem.text}`);
  });

  return (
    <li
      className={ClassNames('wish-list__item', {
        'wish-list__item--done': wishItem.done,
      })}
    >
      <input
        id={`wishItem-${wishItem.id}`}
        type="checkbox"
        defaultChecked={wishItem.done}
        onChange={(event) => {
          onDoneChange({
            id: wishItem.id,
            done: event.target.checked,
            text: wishItem.text,
          });
        }}
      />
      <label htmlFor={`wishItem-${wishItem.id}`}>{wishItem.text}</label>
    </li>
  );
}

WishItem.propTypes = {
  wishItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }),
  onDoneChange: PropTypes.func,
};

WishItem.defaultProps = {
  wishItem: { id: '', done: false, text: '' },
  onDoneChange: () => {},
};

export default WishItem;

import React from 'react';
import PropTypes from 'prop-types';
import RoomType from './room-type';

const RoomTypes = ({ hotel, estimates, onBookRoomTypeClicked }) => {
  if (!hotel.roomTypes) {
    return [];
  }
  return hotel.roomTypes
    .map((rt, index) => (
      <RoomType
        hotel={hotel}
        key={rt.id}
        roomType={rt}
        estimate={estimates.find(e => e.id === rt.id)}
        index={index}
        onBookRoomTypeClicked={onBookRoomTypeClicked}
      />
    ));
};


RoomTypes.propTypes = {
  hotel: PropTypes.instanceOf(Object).isRequired,
  estimates: PropTypes.instanceOf(Array).isRequired,
  onBookRoomTypeClicked: PropTypes.func.isRequired,
};

export default RoomTypes;

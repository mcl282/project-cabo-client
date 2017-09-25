/*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
import React from 'react';
import {ListGroupItem} from 'react-bootstrap';
import * as moment from 'moment';
import numeral from 'numeral';

const StripeChargeItem = ( {charge} ) => {

  let amount = charge.amount/100;
  let description = charge.description;
  let dateRaw = charge.created;
  let dateFormatted = `${moment.unix(dateRaw).format('MMMM Do YYYY')} at ${moment.unix(dateRaw).format('h:mm a')}`;

  return (
    <div>
      <ListGroupItem header={description}>{numeral(amount).format('$0,0.00')} on {dateFormatted}</ListGroupItem>
    </div>
        );
};

export default StripeChargeItem;



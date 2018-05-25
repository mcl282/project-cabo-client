/*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
import React from 'react';
import { Link } from 'react-router-dom'

const PropertyListItem = ( {property} ) => {
  //const propertyId = property.id;
  let unit = "";
    (property.unit) ? (unit = ` (${property.unit})`) : (unit = "");
  
  return (
    <tr>
      <td>
        <Link to={{pathname: `/properties/${property.id}`}}>
          {property.street_number} {property.route}
        </Link>
      </td>
      <td>{property.locality}, {property.administrative_area_level_1}</td>
      <td>{property.postal_code}</td>
    </tr>
    );
};

export default PropertyListItem;



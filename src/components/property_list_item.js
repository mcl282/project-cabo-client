import React from 'react';

const PropertyListItem = ( {property} ) => {
  const propertyId = property.id
  let unit = "";
    (property.unit) ? unit = ` (${property.unit})` : "";
  
  return (
    <tr>
      <td>{property.street_number} {property.route}{unit}</td>
      <td>{property.locality}, {property.administrative_area_level_1} {property.postal_code}</td>
    </tr>
    )
}

export default PropertyListItem;



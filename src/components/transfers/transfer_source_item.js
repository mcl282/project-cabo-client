import React from 'react';

const TransferSourceItem = ( {sourceData} ) => {

  return (
    <div>
      <h1>{sourceData.bankName}</h1>
      <h2>{sourceData.bankAccountType}</h2>
    </div>
    )
}

export default TransferSourceItem;
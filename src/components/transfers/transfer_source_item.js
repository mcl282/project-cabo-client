import React from 'react';

const TransferSourceItem = ( {fundingSourceData} ) => {

  return (
    <div>
      <h1>{fundingSourceData.bankName}</h1>
      <h2>{fundingSourceData.bankAccountType}</h2>
    </div>
    )
}

export default TransferSourceItem;
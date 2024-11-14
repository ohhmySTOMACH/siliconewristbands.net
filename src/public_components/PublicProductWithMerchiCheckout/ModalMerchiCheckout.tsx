import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import MerchiCheckout from 'merchi_checkout';
import { getNextBackendUri, getNextFrontendUri, getNextGoogleApi } from '../utilities';

interface Props {
  currentUser?: any;
  hideDrafting?: boolean;
  includeDomainSignup?: boolean;
  invoice: any;
  isBuyNowRequest: boolean;
  isOpen: boolean;
  job: any;
  product: any;
  redirectAfterSuccessUrl?: string;
  redirectAfterQuoteSuccessUrl?: string;
  redirectWithValue?: boolean;
  setInvoice: (invoice: any) => void;
  setJob: (job: any) => void;
  toggleMerchiCheckout: () => void;
}

function ModalMerchiCheckout({
  currentUser,
  hideDrafting,
  includeDomainSignup,
  invoice,
  isBuyNowRequest,
  isOpen,
  redirectAfterSuccessUrl,
  redirectAfterQuoteSuccessUrl,
  redirectWithValue,
  setInvoice,
  setJob,
  job,
  product,
  toggleMerchiCheckout,
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggleMerchiCheckout}
      fullscreen={true}
      className='modal_merchi-checkout'
    >
      <ModalBody>
        <MerchiCheckout
          currentUser={currentUser}
          googlePlacesApiKey={getNextGoogleApi()}
          hideDrafting={hideDrafting}
          includeDomainSignup={includeDomainSignup}
          invoice={invoice}
          isBuyRequest={isBuyNowRequest}
          isOpen={isOpen}
          job={job}
          product={product}
          redirectAfterSuccessUrl={redirectAfterSuccessUrl}
          redirectAfterQuoteSuccessUrl={redirectAfterQuoteSuccessUrl}
          redirectWithValue={redirectWithValue}
          setInvoice={setInvoice}
          setJob={setJob}
          toggleMerchiCheckout={toggleMerchiCheckout}
          urlApi={`${getNextBackendUri()}v6/`}
          urlFrontend={getNextFrontendUri()}
          showDiscountCode={true}
        />
      </ModalBody>
    </Modal>
  );
}

export default ModalMerchiCheckout;

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faDownload,
  faDraftingCompass,
  faExclamationCircle,
  faHammer,
  faLink,
  faStopwatch,
  faTrashAlt,
  faTruck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import {
  Button,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

// const LoadingIcon = () => <FontAwesomeIcon icon={faCircleNotch} spin />;

// interface PropsFileListItem {
//   file: any;
//   disabled?: boolean;
//   doDelete?: () => void;
//   loading?: boolean;
// }

// function FileListItem({
//   file,
//   disabled,
//   doDelete,
//   loading,
// }: PropsFileListItem) {
//   return (
//     <li className="merchi-embed-form_information-container-list-group-item no-z-index-hover">
//       <div className="d-flex align-items-center">
//         <span>{file.name}</span>
//         {!disabled && (
//           <div className="ml-auto">
//             <Button
//               color="secondary"
//               download={true}
//               href={file.downloadUrl}
//               size="sm"
//             >
//               <FontAwesomeIcon icon={faDownload} />
//             </Button>
//             {doDelete && (
//               <Button
//                 className="ml-2"
//                 color="danger"
//                 onClick={doDelete}
//                 disabled={Boolean(loading)}
//                 size="sm"
//               >
//                 {loading ? (
//                   <LoadingIcon />
//                 ) : (
//                   <FontAwesomeIcon icon={faTrashAlt} />
//                 )}
//               </Button>
//             )}
//           </div>
//         )}
//       </div>
//     </li>
//   );
// }

function ProcedureIcon({ icon }: any) {
  return (
    <span className="m-r-10 pull-left">
      <FontAwesomeIcon icon={icon} size="2x" />
    </span>
  );
}

interface PropsListGroupItemInfo {
  children: any;
  icon: any;
}

function ListGroupItemInfo({ children, icon }: PropsListGroupItemInfo) {
  return (
    <div className="merchi-embed-form_information-container-list-group-item no-z-index-hover">
      <div className="flex flex-row gap-4 items-center">
        <span className="mr-3">
          <ProcedureIcon icon={icon} />
        </span>
        <div className="text-text">{children}</div>
      </div>
    </div>
  );
}

function ProductNormalDelivery({ product }: any) {
  return product.deliveryDays ? (
    <ListGroupItemInfo icon={faStopwatch}>
      Average turnaround time for this product is approximately $
      {product.deliveryDays} days
    </ListGroupItemInfo>
  ) : (
    <></>
  );
}

function ProductMOQ({ product }: any) {
  const moq = product.minimum;
  return moq > 1 ? (
    <ListGroupItemInfo icon={faExclamationCircle}>
      This product has a <strong>minimum order quantity of {moq} units</strong>
    </ListGroupItemInfo>
  ) : (
    <></>
  );
}

function ProductNeedsDrafting({ product }: any) {
  if (product.needsDrafting) {
    return (
      <li className="list-group-item no-z-index-hover p-2">
        <div className="flex flex-row gap-4 items-center text-wrap">
          <span className="mr-3">
            <ProcedureIcon icon={faDraftingCompass} />
          </span>
          This product requires that a draft must be approved before production
          commences.
        </div>
      </li>
    );
  }
  return product.needsDrafting ? (
    <ListGroupItemInfo icon={faDraftingCompass}>
      This product requires that a draft must be approved before production
      commences.
    </ListGroupItemInfo>
  ) : (
    <></>
  );
}

function ProductNeedsProduction({ product }: any) {
  return product.needsProduction ? (
    <ListGroupItemInfo icon={faHammer}>
      This product has a production phase which may delay delivery.
    </ListGroupItemInfo>
  ) : (
    <></>
  );
}

function ProductNeedsShipping({ product }: any) {
  return product.needsShipping ? (
    <ListGroupItemInfo icon={faTruck}>
      This product is shipped directly to an address provided by you.
    </ListGroupItemInfo>
  ) : (
    <></>
  );
}

function ProductInventoryCanBeChained({ product }: any) {
  return product.allowChainedInventoryCreation ? (
    <ListGroupItemInfo icon={faLink}>
      Chained management services are available for this product, which include
      inventory managment and dropshipment.
    </ListGroupItemInfo>
  ) : (
    <></>
  );
}

function ProductAllowGroupBuy({ product }: any) {
  return product.allowGroupBuy ? (
    <ListGroupItemInfo icon={faUsers}>
      <strong style={{ marginRight: "0.2rem" }}>
        Audience fund/crowdsource
      </strong>{" "}
      campaigns can be created with this product.
    </ListGroupItemInfo>
  ) : (
    <></>
  );
}

function ProductInformationSections(props: any) {
  const { product } = props;

  return (
    <ul>
      <ProductAllowGroupBuy product={product} />
      <ProductInventoryCanBeChained product={product} />
      <ProductNormalDelivery product={product} />
      <ProductMOQ product={product} />
      <ProductNeedsDrafting product={product} />
      <ProductNeedsProduction product={product} />
      <ProductNeedsShipping product={product} />
    </ul>
  );
}

function ProductDescription({ description }: any) {
  return (
    <div className="merchi-embed-form_information-container-list-group-item no-z-index-hover">
      <div className="text-text">{description}</div>
    </div>
  );
}

// interface ProductPublicFilesProps {
//   publicFiles: Array<any>;
// }

// function ProductPublicFiles(props: ProductPublicFilesProps) {
//   const { publicFiles } = props;
//   return (
//     <ListGroup>
//       {publicFiles.map((f: any, i: number) => (
//         <FileListItem key={`${i}-publicfile`} file={f} />
//       ))}
//     </ListGroup>
//   );
// }

function Item({ activeTab, name, toggle, value }: any) {
  const isActive = activeTab === value;

  return (
    <li
      onClick={() => toggle(value)}
      className={`p-2 mb-0 cursor-pointer transition-colors duration-300 ease-in-out rounded-sm shadow-sm ${
        isActive
          ? "bg-btn-blue text-gray-100 hover:text-white hover:bg-btn-blue"
          : "bg-white text-gray-400 shadow-md transform scale-105"
      }`}
    >
      {name}
    </li>
  );
}

interface Props {
  product: any;
}

function ProductInformation({ product }: Props) {
  const { description, publicFiles = [] } = product as any;

  const hasProductDesciption = !!description;
  const [activeTab, setActiveTab] = useState(hasProductDesciption ? "2" : "1");
  const hasPublicFiles = publicFiles.length > 0;

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="px-0 sm:px-8">
      <ul className="flex flex-row justify-center gap-8 list-none">
        {hasProductDesciption && (
          <Item
            activeTab={activeTab}
            name="Description"
            toggle={toggle}
            value="2"
          />
        )}
        <Item
          activeTab={activeTab}
          name="Information"
          toggle={toggle}
          value="1"
        />
      </ul>
      <TabContent className="py-3" activeTab={activeTab}>
        {hasProductDesciption && activeTab === "2" && (
          <TabPane tabId="2">
            <ProductDescription description={description} />
          </TabPane>
        )}
        {activeTab === "1" && (
          <TabPane tabId="1">
            <ProductInformationSections product={product} />
          </TabPane>
        )}
      </TabContent>
    </div>
  );
}

export default ProductInformation;

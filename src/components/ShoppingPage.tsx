import ContactForms from "./ContactForms";
import ShoppingPageJSON from "../planning/text/Shopping_Page_Text.json";
import AllItemsDisplay from "./AllItemsDisplay";
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import items from "../planning/data/Items";

const ShoppingPage = () => {
  const { itemId } = useParams();
  return (
    <>
      {itemId ? (
        <ItemDetails itemId={Number(itemId)} />
      ) : (
        <>
          <div className="flex flex-col gap-5 px-[5%] max-w-[2000px] bg-frondaBiege pt-20 pb-5">
            <h1 className="text-5xl font-bold">
              {ShoppingPageJSON.subhero.title}
            </h1>
            <p className="text-2xl font-medium w-[35%]">
              {ShoppingPageJSON.subhero.paragraph}
            </p>
            <div className="w-full bg-frondaBiege">
              <hr className="mb-1 mt-12 border-frondaOrange/50 border-[1px]" />
            </div>
          </div>
          <AllItemsDisplay displayItems={items} />
          <ContactForms />
        </>
      )}
    </>
  );
};

export default ShoppingPage;

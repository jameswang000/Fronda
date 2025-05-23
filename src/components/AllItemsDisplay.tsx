import { v4 as uuidv4 } from "uuid";
import ItemDisplay from "./ItemDisplay.tsx";
import ItemDisplayProps from "./ItemDisplay";

const AllItemsDisplay = ({
  displayItems,
}: {
  displayItems: ItemDisplayProps[];
}) => {
  return (
    <div className="max-w-[2000px] bg-frondaBiege w-full px-[5%] pb-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-20">
        {displayItems.map((itemProps: ItemDisplayProps, i) => {
          const id = uuidv4();
          return <ItemDisplay key={id} {...itemProps} itemId={i} />;
        })}
      </div>
    </div>
  );
};

export default AllItemsDisplay;

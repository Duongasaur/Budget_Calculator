import compose from "lodash/fp/compose";

const safeParse = amount => parseFloat(amount) || 0;

const compareItems = (a, b) => {
  const aAmount = safeParse(a.amount);
  const bAmount = safeParse(b.amount);
  return aAmount - bAmount;
};

const filterItems = budgetItems => budgetItems.filter(({ amount }) => !!amount);

const sortItems = budgetItems => budgetItems.sort((a, b) => compareItems(a, b));

const calculateHeat = (index, length) => {
  const percentage = (index + 1) / length;
  const color = Math.floor(255 - percentage * 100);
  return `rgb(255, ${color}, ${color})`;
};

const itemsWithColor = budgetItems =>
  budgetItems.map((item, index, all) => ({
    ...item,
    heat: calculateHeat(index, all.length)
  }));

const WHITE_RGB = "rgb(255, 255, 255)";

const buildGetHeat = budgetItems => item => {
  const itemWithHeat = budgetItems.find(({ id }) => id === item.id);
  return itemWithHeat ? itemWithHeat.heat : WHITE_RGB;
};

export default compose(
  buildGetHeat,
  itemsWithColor,
  sortItems,
  filterItems
);

import NavigationItem from "../NavigationItem/NavigationItem.jsx";
export default function Navigation({ items }) {
  return items
    ? items.map((item) => <NavigationItem key={item.text} {...item} />)
    : null;
}

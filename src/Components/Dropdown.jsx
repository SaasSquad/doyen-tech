import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, mobileDrop, depthLevel }) => {
    depthLevel = depthLevel + 1;

 return (
  <ul className={`flex ${mobileDrop ? 'relative' : 'absolute'} bg-blue-900 p-4 ${depthLevel > 1 && "relative ml-4"} ${depthLevel > 0 && "flex-col"} ${dropdown ? "flex" : "hidden"}`}>
   {submenus.map((submenu, index) => (
    <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
   ))}
  </ul>
 );
};

export default Dropdown;
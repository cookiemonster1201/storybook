import Navigation from "./Navigation";
import { navItems } from "./navItems";

const Stories = {
  title: "Navigation",
  component: Navigation,
};

export default Stories;

const Template = (args) => <Navigation {...args} />;
export const Default = Template.bind({});
Default.args = {
  items: navItems,
};

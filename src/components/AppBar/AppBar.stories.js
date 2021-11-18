import AppBar from "./AppBar";
import { navItems } from "../Navigation/navItems";
const Stories = {
  title: "AppBar",
  component: AppBar,
};

export default Stories;

const Template = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoImg: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  navItems,
};

export const Minimized = Template.bind({});
Minimized.args = {
  ...Default.args,
  minimized: true,
};

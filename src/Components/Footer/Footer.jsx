import {
  MdOutlineHome,
  MdOutlineExplore,
  MdOutlineAddCircleOutline,
  MdOutlineNotifications,
  MdOutlinePerson,
} from "react-icons/md";
const Footer = () => {
  return (
    <div className="md:hidden bg-white rounded-md sticky bottom-0 py-3 px-6 border-2 border-pink-600 flex justify-between text-2xl text-gray-700">
      <MdOutlineHome />
      <MdOutlineExplore />
      <MdOutlineAddCircleOutline />
      <MdOutlineNotifications />
      <MdOutlinePerson />
    </div>
  );
};

export default Footer;

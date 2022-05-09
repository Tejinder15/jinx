import FriendRequest from "../FriendRequest/FriendRequest";
import Suggested from "../Suggested/Suggested";

const RightPanel = () => {
  return (
    <aside className="max-w-xs hidden md:block realtive">
      <FriendRequest />
      <Suggested />
    </aside>
  );
};

export { RightPanel };

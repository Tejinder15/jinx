import Suggested from "../Suggested/Suggested";

const RightPanel = () => {
  return (
    <aside className="max-w-xs w-4/12 hidden md:block box-content h-auto realtive">
      <Suggested />
    </aside>
  );
};

export { RightPanel };

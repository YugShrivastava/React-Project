import { useEffect } from "react";

function Input({
  width,
  height,
  checked,
  id,
  toggleChecked,
  setShowFinish,
  showFinish,
}) {
  const doToggleChecked = () => {
    toggleChecked(id);
  };

  const toggleFinish = () => {
    setShowFinish((prev) => !prev);
  };

  return (
    <input
      className={`${width} ${height}`}
      type="checkbox"
      checked={checked}
      onChange={width === "w-3" ? doToggleChecked : toggleFinish}
    />
  );
}

export default Input;

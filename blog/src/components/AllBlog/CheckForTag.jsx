export const CheckForTag = ({ setAllTags, allTags, tag }) => {
  return (
    <div className="w-full h-fit grid grid-cols-3 min-[480px]:justify-items-center  *:text-xs ">
      <p className="w-[18%] flex items-center flex-wrap ">
        <span className="font-bold text-xs leading-6">
          {tag.title
            ?.split("")
            .map((l, i) => {
              if (i == 0) {
                return l.toUpperCase(0);
              }
              return l;
            })
            .join("")}
        </span>
      </p>
      <p className="text-center">
        Included blogs:{" "}
        <span className="font-bold text-xs leading-6">{tag.included_blog}</span>
      </p>
      <label className="flex items-center text-center font-bold text-xs leading-6">
        <input
          type="checkbox"
          checked={tag.included}
          onChange={(e) => {
            setAllTags(
              allTags.map((t) => {
                if (t.id === tag.id) {
                  return { ...tag, included: e.target.checked };
                } else {
                  return t;
                }
              })
            );
          }}
        />{" "}
        Check tag
      </label>
    </div>
  );
};

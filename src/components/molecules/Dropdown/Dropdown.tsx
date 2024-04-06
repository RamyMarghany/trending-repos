type DropdownProps = {
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  id: string;
  optionsList: string[];
};

export const Dropdown: React.FC<DropdownProps> = ({
  className,
  onChange,
  optionsList,
  id,
}) => {
  return (
    <select className={className} id={id} onChange={onChange}>
      {[
        <option key="" value="">
          All
        </option>,
      ].concat(
        optionsList?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))
      )}
    </select>
  );
};

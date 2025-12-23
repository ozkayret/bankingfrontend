const SelectBoxField = ({
  label,
  id,
  errors,
  register,
  required,
  className,
  placeholder,
  message,
  value,
  validate,
  readOnly,
  options = [],
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={`${className ? className : ""} font-semibold text-md  `}
      >
        {label}
      </label>

      <select
        id={id}
        disabled={readOnly}
        //value={value} // Controlled by register usually, but if controlled explicitly passed, careful. register returns onChange/onBlur/name/ref.
        className={`${
          className ? className : ""
        } px-2 py-2 border   outline-none bg-transparent  text-slate-700 rounded-md ${
          errors[id]?.message ? "border-red-500" : "border-slate-600"
        }`}
        {...register(id, {
          required: { value: required, message },
          validate: validate,
        })}
      >
        <option value="">{placeholder || "Select..."}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {errors[id]?.message && (
        <p className="text-sm font-semibold text-red-600 mt-0">
          {errors[id]?.message}*
        </p>
      )}
    </div>
  );
};

export default SelectBoxField;
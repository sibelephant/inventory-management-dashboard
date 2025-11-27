import { useState } from "react";
import useFormStore from "../store/useStore";

interface NewField {
  label: string;
  type: "text" | "number" | "password" | "textarea" | "date" | "file";
  value: string;
}

const FormBuilder = () => {
  const { formFields, addField, removeField, updateField, resetForm } =
    useFormStore();

  const [newField, setNewField] = useState<NewField>({
    label: "",
    type: "text",
    value: "",
  });
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Form Builder</h1>
      <div className="flex flex-col mb-6">
        <input
          type="text"
          name="label"
          placeholder="Field Label"
          value={newField.label}
          // onChange={handleFieldChange}
          className="p-2 mb-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select name="type"></select>
      </div>
    </div>
  );
};

export default FormBuilder;

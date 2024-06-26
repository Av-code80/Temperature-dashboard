import React, { useState } from "react";

interface Props {
  onThresholdChange: (threshold: number) => void;
}

/**
 * Form component to set the temperature threshold.
 */
const TemperatureThresholdForm: React.FC<Props> = ({ onThresholdChange }) => {
  const [threshold, setThreshold] = useState<string>("0");

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "0") {
      setThreshold("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThreshold(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericThreshold = Number(threshold);
    if (!isNaN(numericThreshold)) {
      onThresholdChange(numericThreshold);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-col lg:flex-row justify-between lg:justify-between lg:items-center"
    >
      <label className="block text-lg font-semibold mr-2">
        Temperature Threshold
      </label>
      <input
        type="number"
        value={threshold}
        onFocus={handleFocus}
        onChange={handleChange}
        className="p-2 text-center border border-gray-300 rounded mr-2 mb-4 lg:mt-4"
        aria-label="Temperature Threshold"
        min="0"
      />
      <button type="submit" className="btn-gradient transition-ease">
        Threshold
      </button>
    </form>
  );
};

export default TemperatureThresholdForm;

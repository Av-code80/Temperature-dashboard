import React, { useState } from "react";

interface Props {
  onThresholdChange: (threshold: number) => void;
}

const TemperatureThresholdForm: React.FC<Props> = ({ onThresholdChange }) => {
  const [threshold, setThreshold] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onThresholdChange(threshold);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex justify-center items-center"
    >
      <label className="block mb-2 text-lg font-semibold mr-2">
        Temperature Threshold:
      </label>
      <input
        type="number"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        className="p-2 border border-gray-300 rounded mr-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Set Threshold
      </button>
    </form>
  );
};

export default TemperatureThresholdForm;

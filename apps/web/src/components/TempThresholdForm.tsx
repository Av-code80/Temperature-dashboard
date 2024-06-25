import React, { useState } from "react";

interface Props {
  onThresholdChange: (threshold: number) => void;
}

const TempThresholdForm: React.FC<Props> = ({ onThresholdChange }) => {
  const [threshold, setThreshold] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onThresholdChange(threshold);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block mb-2">
        Temperature Threshold:
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
          className="ml-2 p-2 border border-gray-300 rounded"
        />
      </label>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Set Threshold
      </button>
    </form>
  );
};

export default TempThresholdForm;

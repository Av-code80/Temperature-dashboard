import { useState, useEffect } from "react";

export function usePersistData(data: any) {
  const [keepData, setKeepData] = useState();

  useEffect(() => {
    setKeepData(data);
  }, [data]);

  return keepData;
}

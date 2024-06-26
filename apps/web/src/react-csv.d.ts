declare module "react-csv" {
  import { FC, ReactNode } from "react";

  export interface CSVLinkProps {
    data: any[];
    headers?: { label: string; key: string }[];
    filename?: string;
    className?: string;
    children?: ReactNode;
  }

  export const CSVLink: FC<CSVLinkProps>;
}

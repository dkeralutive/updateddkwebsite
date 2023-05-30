import { useContext as useReactContext } from "react";
import { AdminContextProps } from "../types/contexts";

const useContext = (
  context: React.Context<AdminContextProps>
) => {
  return useReactContext<AdminContextProps>(context);
};

export default useContext;

import React from "react";
import { useAppSelector } from "../../redux/hooks";
import LoaderModal from "./index";

const GlobalLoader: React.FC = () => {
  const { isLoading, message } = useAppSelector((state) => state.root.loader);

  return <LoaderModal visible={isLoading} message={message} />;
};

export default GlobalLoader;

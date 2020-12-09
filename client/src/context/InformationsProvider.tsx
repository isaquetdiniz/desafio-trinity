import React, { useContext, useState, createContext } from "react";

const InformationsContext = createContext([] as any);

const InformationsProvider = ({ children }: { children: React.ReactNode }) => {
  const [informations, setInformations] = useState();
  const [attInformations, setAtt] = useState<boolean>();

  const setAttInformations = () => {
    setAtt(!attInformations);
  };

  return (
    <InformationsContext.Provider
      value={[informations, setInformations, attInformations, setAttInformations]}
    >
      {children}
    </InformationsContext.Provider>
  );
}

export const useInformations = () => useContext(InformationsContext);

export default InformationsProvider;
import type { Skip } from "@/types/Skip";
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type SkipContextType = {
  selectedSkip: Skip | null;
  setSelectedSkip: Dispatch<SetStateAction<Skip | null>>;
};

type SkipProviderProps = {
  children: ReactNode;
};

const SkipContext = createContext<SkipContextType | null>(null);

export function SkipProvider({ children }: SkipProviderProps) {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  return (
    <SkipContext.Provider value={{ selectedSkip, setSelectedSkip }}>
      {children}
    </SkipContext.Provider>
  );
}

export function useSkipContext() {
  const context = useContext(SkipContext);
  if (!context) {
    throw new Error("useSkip must be used within a SkipProvider");
  }
  return context;
}

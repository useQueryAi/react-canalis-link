export interface CanalisLinkProps {
  onSuccess: (code: string) => void;
  onError?: (error: string) => void;
}

interface CanalisState {
  isLoaded: boolean;
}
export interface Canalis {
  open: ({
    clientId,
    endUserOriginId,
  }: {
    clientId: string;
    endUserOriginId: string;
  }) => void;
  state: CanalisState;
}

declare global {
  interface Window {
    Canalis: Canalis;
  }
}

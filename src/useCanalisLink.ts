import { useCallback, useEffect } from "react";
import useScript from "react-script-hook";

import { CanalisLinkProps } from "./types/types";

// SDK is served as static content from the GCS bucket URL.
const BASE_URL =
  "https://storage.googleapis.com/canalis-link-sdk/canalis-link-sdk.js";

export default function useCanalisLink(props: CanalisLinkProps) {
  const [loading, errorState] = useScript({
    src: BASE_URL,
    checkForExisting: true,
  });

  useEffect(() => {
    window.addEventListener("message", postMessageListener);

    return () => {
      window.removeEventListener("message", postMessageListener);
    };
  }, [loading]);

  const postMessageListener = useCallback((event: any) => {
    // TODO: Check if the origin is not at our hosted domain (when we have one)
    if (
      event.origin !== "http://localhost:3000" ||
      event.origin !== "https://www.canalis.ai"
    ) {
      console.log(`Unknown origin detected: ${event.origin}`);
      return;
    }

    // Extract data from event.
    const { code, status, error } = event.data;
    if (status === "success") {
      props.onSuccess(code as string);
    } else if (status === "error") {
      props.onError && props.onError(error as string);
    } else {
      console.log(`Unknown response received: ${JSON.stringify(event)}`);
    }
  }, []);

  const open = ({
    clientId,
    endUserOriginId,
  }: {
    clientId: string;
    endUserOriginId: string;
  }) => {
    if (errorState) {
      throw new Error(`Error loading Canalis SDK: ${errorState}`);
    }
    if (!window.Canalis) {
      console.error("Canalis is not initialised");
      return;
    }
    // Open modal
    window.Canalis.open({ clientId, endUserOriginId });
  };

  return {
    ready: !loading,
    errorState,
    open,
  };
}

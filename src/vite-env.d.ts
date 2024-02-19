// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_DESCRIPTION: string;
  readonly VITE_APP_URL: string;
  readonly VITE_APP_ICON: string;

  readonly VITE_WALLETCONNECT_METADATA_NAME: string;
  readonly VITE_WALLETCONNECT_METADATA_DESCRIPTION: string;
  readonly VITE_WALLETCONNECT_METADATA_URL: string;
  readonly VITE_WALLETCONNECT_METADATA_ICON: string;

  readonly VITE_WALLETCONNECT_PROJECT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

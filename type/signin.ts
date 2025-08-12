export type SIGNIN_PAYLOAD = {
  provider: "google" | "custom";
  token: string;
};

export type SIGNIN_RESPONSE = {
  token: string;
  refreshToken: string;
};

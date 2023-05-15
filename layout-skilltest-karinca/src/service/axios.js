import axios from "axios";

export const api = axios.create({
  baseURL: "https://test-api.softrig.com/api/",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getUsers = async () => {
  const response = await api.get("biz/contacts");
};

// import axios from "axios";
// import { useOidc, useOidcIdToken } from "@axa-fr/react-oidc";

// const { idToken } = useOidcIdToken();

// export const api = axios.create({
//   baseURL: "https://test-api.softrig.com/api/",
//   headers: {
//     Authorization: `Bearer ${idToken}`,
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// });

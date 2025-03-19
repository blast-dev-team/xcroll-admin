import { useMutation } from "@tanstack/react-query";

import { login } from "./auth";

export const usePostLogin = () =>
  useMutation(["login"], (inputValue: { email: string; password: string }) =>
    login(inputValue),
  );

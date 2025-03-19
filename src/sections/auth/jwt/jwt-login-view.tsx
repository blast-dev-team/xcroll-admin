import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import InputAdornment from "@mui/material/InputAdornment";

import { useRouter, useSearchParams } from "src/routes/hooks";

import { useBoolean } from "src/hooks/use-boolean";



import Iconify from "src/components/iconify";
import FormProvider, { RHFTextField } from "src/components/hook-form";
import Box from "@mui/material/Box";
import { ErrorShape } from "../../../assets/icons";


// ----------------------------------------------------------------------

export default function JwtLoginView() {
  const loginState = useBoolean(true);
  // const { status, mutate: postLogin } = usePostLogin();
    let status = '';
  const router = useRouter();
  const password = useBoolean();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
    watch,
  } = methods;

  const onSubmit = handleSubmit((data) => {
      router.replace("/");
    // postLogin(data);
  });

  useEffect(() => {
    if (status === "success") {
      router.replace("/");
      loginState.onTrue();
    }

    if (status === "error") {
      loginState.onFalse();
    }

    reset();
  }, [status]);

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5, textAlign: "center" }}>
      <Typography variant="h3">Admin Login</Typography>
    </Stack>
  );
  const renderForm = (
    <Stack spacing={2.5}>
      <RHFTextField name="email" label="Email address" />

      <RHFTextField
        name="password"
        label="Password"
        type={password.value ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify
                  icon={
                    password.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                  }
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {!loginState.value && (
        <Box display="flex" alignItems={"center"}>
          <ErrorShape width={16} height={16} mx={"4px"} />
          <Typography variant="caption" color="error">
            Email address or password you entered is incorrect.
          </Typography>
        </Box>
      )}

      <LoadingButton
        fullWidth
        sx={{
          marginTop: 2.5,
        }}
        color="success"
        size="large"
        type="submit"
        variant="contained"
        disabled={watch("email") === "" || watch("password") === ""}
        loading={isSubmitting}
      >
        Login
      </LoadingButton>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderHead}

      {renderForm}
    </FormProvider>
  );
}

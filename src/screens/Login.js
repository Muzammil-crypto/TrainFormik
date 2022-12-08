import { SafeAreaView, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import Button from "../components/Button";
import loginValidationSchema from "../schemas/formikSchema";
import styles from "../utils/App.component.style";
import StatusBarComp from "../components/StatusBar";
import HeaderCover from "../components/HeaderCover";
import InputText from "../components/InputText";
import ErrorMsg from "../components/ErrorMsg";
const Login = () => {
  return (
    <>
      <StatusBarComp />
      <SafeAreaView style={styles.container}>
        <HeaderCover />
        <View style={styles.loginContainer}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, values, errors, isValid }) => (
              <>
                <InputText
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInputs}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />

                {errors.email && <ErrorMsg value={errors.email} />}
                <InputText
                  name="password"
                  placeholder="Password"
                  style={styles.textInputs}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && <ErrorMsg value={errors.password} />}

                <Button mode={"contained"}>Submit</Button>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};
export default Login;

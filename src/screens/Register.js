import { SafeAreaView, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import Button from "../components/Button";
import styles from "../utils/App.component.style";
import StatusBarComp from "../components/StatusBar";
import HeaderCover from "../components/HeaderCover";
import InputText from "../components/InputText";
import ErrorMsg from "../components/ErrorMsg";
import SignupValidationSchema from "../schemas/signupValidationSchema";
const RegisterScreen = ({ navigation }) => {
  const onSubmit = () => {
    console.log("object");
    navigation.navigate("Login");
  };
  return (
    <>
      <StatusBarComp />
      <SafeAreaView style={styles.container}>
        <HeaderCover
          heading="Hi there, Create your account here!"
          uri={
            "https://images.squarespace-cdn.com/content/v1/56898de5a128e63c0adac434/1559093342675-B3L2ZSKZU5Z5QYDHL148/HCD+As+Is+Journey+Map.png?format=1000w"
          }
        />
        <View style={styles.loginContainer}>
          <Formik
            validationSchema={SignupValidationSchema}
            initialValues={{
              fullName: "",
              email: "",
              phoneNumber: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={onSubmit}
          >
            {({
              handleChange,
              handleBlur,
              values,
              errors,

              handleSubmit,
            }) => (
              <>
                <InputText
                  name="fullName"
                  placeholder="Name"
                  style={styles.textInputs}
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  value={values.fullName}
                  keyboardType="fullName"
                />
                {errors.fullName && <ErrorMsg value={errors.fullName} />}

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

                <InputText
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  style={styles.textInputs}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry
                />
                {errors.confirmPassword && (
                  <ErrorMsg value={errors.confirmPassword} />
                )}

                <Button onPress={handleSubmit} mode={"contained"}>
                  Submit
                </Button>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};
export default RegisterScreen;

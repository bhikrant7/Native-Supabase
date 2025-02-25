import { View, Text, ScrollView, Image, Dimensions, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
// import { supabase } from "@/lib/supabase";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  //implemented Supabase methods
  const submit = async () => {
    // setIsSubmitting(true);

    // const { data, error } = await supabase.auth.signUp({
    //   email: form.email,
    //   password: form.password,
    // });

    // if (error) {
    //   Alert.alert("Sign Up Failed", error.message);
    // } else {
    //   Alert.alert("Check your email for verification!");
    // }

    // setIsSubmitting(false);
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign up to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            placeholder="Enter your name"
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
            //keyboardType="name" // Useful for autofilling and all based on the type set
          />
          <FormField
            title="Email"
            value={form.email}
            placeholder="Enter your email"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address" // Useful for autofilling and all based on the type set
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            //secureTextEntry={true} // Use secureTextEntry for password fields
          />
          <FormField
            title="Password"
            value={form.confirmpassword}
            placeholder="Confirm your password"
            handleChangeText={(e) => setForm({ ...form, confirmpassword: e })}
            otherStyles="mt-7"
            //secureTextEntry={true} // Use secureTextEntry for password fields
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Return back to
            </Text>
            <Link
              href="/sign_in"
              className="text-lg font-psemibold text-secondary"
            >
              SignIn
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

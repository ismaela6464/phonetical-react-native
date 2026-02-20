import { ThemedView } from "@/components/themed-view";
import { Input } from "@rneui/themed";
import React, { useState } from "react";
import { Alert, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../../../lib/supbase";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }
  async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      email: "valid.email@supabase.io",
      password: "example-password",
      options: {
        emailRedirectTo: "",
      },
    });
  }

  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView>
          <ThemedView>
            <Input
              label="Email"
              // leftIcon={{ type: "font-awesome", name: "envelope" }}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="email@address.com"
              autoCapitalize={"none"}
            />
          </ThemedView>
          <ThemedView>
            <Input
              label="Password"
              // leftIcon={{ type: "font-awesome", name: "lock" }}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              autoCapitalize={"none"}
            />
          </ThemedView>
          <ThemedView>
            <Button
              title="Sign in"
              disabled={loading}
              onPress={() => signInWithEmail()}
            />
          </ThemedView>
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPasswordView() {
  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView>
          <ThemedText type="title">Forgot Password</ThemedText>

          <Link href="/(login)/(auth)/index">Back to Login</Link>
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}

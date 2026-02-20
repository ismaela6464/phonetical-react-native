import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SettingsView() {
  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView>
          <ThemedText type="title">Hello, welcome to the Settings!</ThemedText>
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}

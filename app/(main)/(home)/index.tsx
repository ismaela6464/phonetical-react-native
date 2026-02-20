import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function HomeView() {
  return (
    <SafeAreaProvider>
      <ThemedView>
        <SafeAreaView>
          <ThemedText type="title">Home View. YO !</ThemedText>
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}

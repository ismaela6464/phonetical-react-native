import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://spgftvlakatrlclbezwm.supabase.co";
const supabasePublishableKey = "sb_publishable_dTw2SFDHw_1NaCRE6GJD0g_3WENh4vc";

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

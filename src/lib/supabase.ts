import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tzcxcgpslvgqovgmpnjl.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6Y3hjZ3BzbHZncW92Z21wbmpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY3ODMyMDgsImV4cCI6MTk3MjM1OTIwOH0.zL8kiBdqyc-IBW_z2-ZL64e977w26iay-WpyqrBAV3A";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  localStorage: AsyncStorage as any,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
});

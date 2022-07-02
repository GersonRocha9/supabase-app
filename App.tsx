import "react-native-url-polyfill/auto";

import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { View } from "react-native";

import Account from "./src/components/Account";
import Auth from "./src/components/Auth";
import { supabase } from "./src/lib/supabase";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <View>{session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}</View>;
}

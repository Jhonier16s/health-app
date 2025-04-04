import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qbeyuwpqfvwqneglgetp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZXl1d3BxZnZ3cW5lZ2xnZXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NjE5NzgsImV4cCI6MjA1OTEzNzk3OH0.s8X8y-8twqi50eUEFiz2APu4xjn1QXT0M12qcgvOyqs"


export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
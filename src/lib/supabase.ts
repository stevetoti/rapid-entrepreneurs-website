import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dnjnsotemnfrjlotgved.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuam5zb3RlbW5mcmpsb3RndmVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxMDYzODAsImV4cCI6MjA1MzY4MjM4MH0.gXJtNDMxFPB8vVVt_wbLMNHQWQzHXc59T3q9HKBMvyE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Site ID for Rapid Entrepreneurs
export const SITE_ID = 'rapid-entrepreneurs';

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ysgmdyalrmdodwuqqyzf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzZ21keWFscm1kb2R3dXFxeXpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDYwNjIsImV4cCI6MjA2NTUyMjA2Mn0.uHxPk7hd2xwQwPhXmi-hchzsmidicBy_8Ak6Pns6XpI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
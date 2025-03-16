import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://hnvsbhasmviwrfvuwclr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhudnNiaGFzbXZpd3JmdnV3Y2xyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwMjI1MjcsImV4cCI6MjA1NzU5ODUyN30.wvW_9mLt6549x6pLNsB49etTJIC_UUzmOgb6qmSAzH0',
)

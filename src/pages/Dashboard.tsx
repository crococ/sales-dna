import { User } from '@supabase/supabase-js'
import { supabase } from '@/integrations/supabase/client'

interface DashboardProps {
  user: User
}

export default function Dashboard({ user }: DashboardProps) {
  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-foreground">Sales DNA</h1>
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground">{user.email}</span>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 text-sm font-medium text-destructive hover:text-destructive/80"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-border rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Welcome to Sales DNA
              </h2>
              <p className="text-muted-foreground">
                Your secure sales analytics platform
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
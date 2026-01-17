export type Database = {
  public: {
    Tables: {
      organizations: {
        Row: {
          id: string
          name: string
          slug: string
          industry: string | null
          employee_count: number | null
          description: string | null
          settings: {
            geolocation_required: boolean
            geolocation_radius: number
            work_start_time: string
            work_end_time: string
          }
          attendance_qr_token: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['organizations']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['organizations']['Insert']>
      }
      owners: {
        Row: {
          id: string
          organization_id: string
          auth_user_id: string
          email: string
          full_name: string
          created_at: string
          last_login_at: string | null
        }
        Insert: Omit<Database['public']['Tables']['owners']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['owners']['Insert']>
      }
    }
  }
}

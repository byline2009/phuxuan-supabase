'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function logout() {
    const supabase = await createClient();

    // Gọi Supabase signOut
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error("Logout error:", error);
    }
    revalidatePath("", "layout")
    // Điều hướng về trang login
    redirect("/login");
}
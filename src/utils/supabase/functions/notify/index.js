import { serve } from "https://deno.land/std@0.131.0/http/server.ts";

serve(async (req) => {
    const { name } = await req.json();
    return new Response(`Xin chào ${name}, chức năng Edge Function đã hoạt động!`);
});

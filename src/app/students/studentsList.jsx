import { createClient } from "@/utils/supabase/server";

export default async function StudentsList() {
  const supabase = await createClient();

  const { data: students } = await supabase.from("students").select("*");

  return (
    <div>
      <h3>Học sinh trong lớp</h3>
      <ul>
        {students?.map((s) => (
          <li key={s.id}>
            {s.full_name} ({s.gender}) - {s.hometown}
          </li>
        ))}
      </ul>
    </div>
  );
}

-- Bật extension uuid
create extension if not exists "uuid-ossp";

-- Bảng classes
create table public.classes (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  teacher text,
  created_at timestamp with time zone default now()
);

-- Bảng students
create table public.students (
  id uuid primary key default uuid_generate_v4(),
  class_id uuid references public.classes(id) on delete cascade,
  full_name text not null,
  gender text check (gender in ('Nam', 'Nữ')),
  birth_date date,
  hometown text,
  created_at timestamp with time zone default now()
);

-- RLS bật lên
alter table public.classes enable row level security;
alter table public.students enable row level security;

-- Chính sách RLS: chỉ user đăng nhập mới xem dữ liệu
create policy "Allow logged-in read access"
  on public.classes for select
  using (auth.role() = 'authenticated');

create policy "Allow logged-in read access"
  on public.students for select
  using (auth.role() = 'authenticated');

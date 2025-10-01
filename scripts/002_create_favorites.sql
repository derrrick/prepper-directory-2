-- Create favorites table for users to save resources
create table if not exists public.favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  resource_type text not null check (resource_type in ('guide', 'product', 'tool')),
  resource_id text not null,
  resource_title text not null,
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.favorites enable row level security;

-- RLS Policies for favorites
create policy "favorites_select_own"
  on public.favorites for select
  using (auth.uid() = user_id);

create policy "favorites_insert_own"
  on public.favorites for insert
  with check (auth.uid() = user_id);

create policy "favorites_delete_own"
  on public.favorites for delete
  using (auth.uid() = user_id);

-- Create index for faster queries
create index if not exists favorites_user_id_idx on public.favorites(user_id);
create index if not exists favorites_resource_idx on public.favorites(resource_type, resource_id);

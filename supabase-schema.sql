create table if not exists public.fruefrue_state (
  key text primary key,
  value jsonb,
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.fruefrue_state enable row level security;

create policy "Public read fruefrue state"
on public.fruefrue_state
for select
to anon
using (true);

create policy "Public write fruefrue state"
on public.fruefrue_state
for insert
to anon
with check (true);

create policy "Public update fruefrue state"
on public.fruefrue_state
for update
to anon
using (true)
with check (true);

create policy "Public delete fruefrue state"
on public.fruefrue_state
for delete
to anon
using (true);

alter publication supabase_realtime add table public.fruefrue_state;

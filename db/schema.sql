-- bets table
create table bets (
    id bigserial primary key,
    name text not null,
    description text
);

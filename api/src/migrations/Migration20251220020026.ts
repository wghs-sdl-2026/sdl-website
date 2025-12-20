import { Migration } from '@mikro-orm/migrations';

export class Migration20251220020026 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "article" ("id" varchar(21) not null, "title" text not null, "author" text not null, "author_id" varchar(21) not null, "summary" text not null, "contents" text not null, "link" text not null, "tags" text[] not null, "multilanguage" jsonb not null, constraint "article_pkey" primary key ("id"));`);

    this.addSql(`create table "link" ("id" varchar(21) not null, "article_id" varchar(21) not null, "user_id" varchar(21) not null, "created_date" timestamptz not null, constraint "link_pkey" primary key ("id"));`);

    this.addSql(`create table "user" ("id" varchar(21) not null, "username" text not null, "hashed_password" text not null, "salt" varchar(12) not null, "admin" boolean not null, constraint "user_pkey" primary key ("id"));`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "article" cascade;`);

    this.addSql(`drop table if exists "link" cascade;`);

    this.addSql(`drop table if exists "user" cascade;`);
  }

}

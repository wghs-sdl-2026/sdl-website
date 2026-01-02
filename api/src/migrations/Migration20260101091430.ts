import { Migration } from "@mikro-orm/migrations";

export class Migration20260101091430 extends Migration {
  override async up(): Promise<void> {
    this.addSql(`drop index "article_author_index";`);
    this.addSql(
      `alter table "article" alter column "author" type text[] using ("author"::text[]);`,
    );
    this.addSql(
      `alter table "article" alter column "author_id" type text[] using ("author_id"::text[]);`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(
      `alter table "article" alter column "author" type text using ("author"::text);`,
    );
    this.addSql(
      `alter table "article" alter column "author_id" type varchar(21) using ("author_id"::varchar(21));`,
    );
    this.addSql(
      `create index "article_author_index" on "public"."article" using gin(to_tsvector('simple', "author"));`,
    );
  }
}

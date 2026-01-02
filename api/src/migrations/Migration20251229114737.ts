import { Migration } from '@mikro-orm/migrations';

export class Migration20251229114737 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create index "article_title_index" on "public"."article" using gin(to_tsvector('simple', "title"));`);
    this.addSql(`create index "article_author_index" on "public"."article" using gin(to_tsvector('simple', "author"));`);
    this.addSql(`create index "article_tags_index" on "article" using GIN ("tags");`);

    this.addSql(`create index "user_username_index" on "user" ("username");`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop index "article_title_index";`);
    this.addSql(`drop index "article_author_index";`);
    this.addSql(`drop index "article_tags_index";`);

    this.addSql(`drop index "user_username_index";`);
  }

}

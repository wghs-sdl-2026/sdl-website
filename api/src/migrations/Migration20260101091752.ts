import { Migration } from '@mikro-orm/migrations';

export class Migration20260101091752 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create index "article_author_index" on "article" using GIN ("author");`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop index "article_author_index";`);
  }

}

import { Entity, Index, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
// @Index({ name: "article_tags_gin", properties: ["tags"], type: "GIN" })
export class Article {
  @PrimaryKey({ length: 21 })
  id!: string; //  nanoid

  @Index({ type: "fulltext" })
  @Property({ type: "text" })
  title!: string;

  @Index({ type: "fulltext" })
  @Property({ type: "text" })
  author!: string;

  @Property({ length: 21 })
  authorId!: string;

  @Property({ type: "text" })
  summary!: string;

  @Property({ type: "text" })
  contents!: string;

  @Property({ type: "text" })
  link!: string; //  external link

  @Index({ type: "GIN" })
  @Property()
  tags!: string[];

  @Property({ type: "json" })
  multilanguage!: { lang: string; id: string }[];
}

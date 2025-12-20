import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Article {
  @PrimaryKey({ length: 21 })
  id!: string; //  nanoid

  @Property({ type: "text" })
  title!: string;

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

  @Property()
  tags!: string[];

  @Property({ type: "json" })
  multilanguage!: { lang: string; id: string }[];
}

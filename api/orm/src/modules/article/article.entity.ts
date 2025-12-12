import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Article {

  @PrimaryKey({ length: 21 })
  id!: string;  //  nanoid

  @Property({ type: "text" })
  title!: string;

  @Property({ type: "text" })
  author!: string;

  @Property({ type: "text" })
  content!: string;

  @Property({ type: "text" })
  link!: string;

}
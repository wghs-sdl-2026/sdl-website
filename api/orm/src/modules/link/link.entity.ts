import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Link {

  @PrimaryKey({ length: 21 })
  id!: string; //  nanoid

  @Property({ length: 21 })
  articleId!: string;

  @Property({ length: 21 })
  userId!: string;

  @Property()
  createdDate!: Date;

}

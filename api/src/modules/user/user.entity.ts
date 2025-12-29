import { Entity, Index, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class User {
  @PrimaryKey({ length: 21 })
  id!: string; //  nanoid

  @Index()
  @Property({ type: "text" })
  username!: string;

  @Property({ type: "text" })
  hashedPassword!: string;

  @Property({ length: 12 })
  salt!: string;

  @Property()
  admin!: boolean;
}

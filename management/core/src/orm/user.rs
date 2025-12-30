use nanoid::nanoid;
use openssl::base64;
use openssl::rand::rand_bytes;
use openssl::sha::Sha256;
use sea_orm::{ActiveModelTrait, ColumnTrait, DbConn, EntityTrait, QueryFilter, Set};
use entity::entities::user::{ActiveModel, Column, Entity, Model};

fn password_hasher(password: String, salt_bytes: &[u8]) -> String {
  let mut hasher = Sha256::new();
  hasher.update(salt_bytes);
  hasher.update(password.as_bytes());
  base64::encode_block(&hasher.finish())
}

pub async fn add_user(db: DbConn, username: String, password: String, admin: bool) -> Result<String, anyhow::Error> {
  let mut salt = [0u8; 8];
  rand_bytes(&mut salt)?;

  let id = nanoid!();
  let hashed_password = password_hasher(password, &salt);

  let model = ActiveModel {
    id: Set(id.clone()),
    username: Set(username),
    hashed_password: Set(hashed_password),
    salt: Set(base64::encode_block(&salt)),
    admin: Set(admin),
  };

  model.update(&db).await?;

  Ok(id)
}

pub async fn find_user_by_username(db: DbConn, username: String) -> Result<Option<Model>, anyhow::Error> {
  Ok(
    Entity::find()
      .filter(Column::Username.eq(username))
      .one(&db)
      .await?
  )
}
use nanoid::nanoid;
use sea_orm::{ActiveModelTrait, DbConn, Set};
use entity::entities::article::ActiveModel;
use crate::models::article::ArticleModel;
use crate::orm::user::find_user_by_username;

pub async fn add_article(db: DbConn, article_model: ArticleModel) -> Result<String, anyhow::Error> {
  let user = find_user_by_username(db.clone(), article_model.author_username)
    .await?
    .ok_or(anyhow::anyhow!("user not found"))?;

  let id = nanoid!();

  let model = ActiveModel {
    id: Set(id.clone()),
    title: Set(article_model.title),
    author: Set(article_model.author_name),
    author_id: Set(user.id),
    summary: Set(article_model.summary.unwrap_or(Default::default())),
    contents: Set(article_model.contents.unwrap_or(Default::default())),
    link: Set(article_model.link.unwrap_or(Default::default())),
    tags: Set(article_model.tags.unwrap_or(Default::default())),
    multilanguage: Set(Default::default()),
  };

  model.insert(&db).await?;

  Ok(id)
}
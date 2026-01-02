use nanoid::nanoid;
use sea_orm::{ActiveModelTrait, DbConn, Iden, Set};
use entity::entities::article::ActiveModel;
use crate::models::article::ArticleModel;
use crate::orm::user::find_user_by_username;

pub async fn add_article(db: DbConn, article_model: ArticleModel) -> Result<String, anyhow::Error> {
  let mut user_ids = Vec::new();
  for username in article_model.author_username.split(",") {
    let user = find_user_by_username(db.clone(), username.to_string())
      .await?
      .ok_or(anyhow::anyhow!("user {username} not found"))?;
    user_ids.push(user.id);
  }

  let id = nanoid!();
  let author: Vec<String> = article_model.author_name.split(",").map(|slice| {slice.to_string()}).collect();

  let model = ActiveModel {
    id: Set(id.clone()),
    title: Set(article_model.title),
    author: Set(author),
    author_id: Set(user_ids),
    summary: Set(article_model.summary.unwrap_or(Default::default())),
    contents: Set(article_model.contents.unwrap_or(Default::default())),
    link: Set(article_model.link.unwrap_or(Default::default())),
    tags: Set(article_model.tags.unwrap_or(Default::default())),
    multilanguage: Set(Default::default()),
  };

  model.insert(&db).await?;

  Ok(id)
}
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct ArticleModel {
  pub title: String,
  pub author_name: String,
  pub author_username: String,
  pub summary: Option<String>,
  pub contents: Option<String>,
  pub link: Option<String>,
  pub tags: Option<Vec<String>>,
}
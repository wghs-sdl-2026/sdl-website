use std::fs::OpenOptions;
use std::io::Write;
use std::path::PathBuf;
use log::{error, info};
use sea_orm::Database;
use crate::models::article::ArticleModel;
use crate::models::user::UserModel;
use crate::orm::article::add_article;
use crate::orm::connection::db_connect;
use crate::orm::user::add_user;

pub async fn import_articles(csv_file: PathBuf, out_file: Option<PathBuf>) {
  let db_conn = db_connect().await;
  let mut buf = String::new();

  match csv::Reader::from_path(csv_file) {
    Ok(mut reader) => {
      for res in reader.deserialize::<ArticleModel>() {
        match res {
          Ok(article) => {
            let article_title = article.title.clone();
            match add_article(db_conn.clone(), article).await {
              Ok(id) => {
                info!("article added: {}", id);
                buf += format!("{}:{}\n", article_title, id).as_str();
              }
              Err(error) => error!("failed to add article: {:?}", error)
            }
          }
          Err(error) => {
            error!("unable to read csv file: {:?}", error);
          }
        }
      }
    }
    Err(error) => {
      error!("unable to read csv file: {:?}", error);
    }
  }

  if let Some(out_file) = out_file {
    let mut out = OpenOptions::new()
      .create(true)
      .write(true)
      .append(true)
      .open(out_file)
      .expect("unable to open output file");
    let _ = out.write_all(buf.as_bytes());
  }
}
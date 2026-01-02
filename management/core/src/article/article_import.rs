use std::fs::{create_dir_all, write, OpenOptions};
use std::io::Write;
use std::path::PathBuf;
use clap::builder::styling::Color::Rgb;
use image::{EncodableLayout, ImageFormat, Luma};
use log::{error, info};
use qrcode::QrCode;
use sea_orm::Database;
use crate::models::article::ArticleModel;
use crate::models::user::UserModel;
use crate::orm::article::add_article;
use crate::orm::connection::db_connect;
use crate::orm::user::add_user;

pub async fn import_articles(csv_file: PathBuf, out_path: Option<PathBuf>, qrcode: bool, url: String) {
  let db_conn = db_connect().await;
  let mut buf = String::new();
  let mut ids: Vec<(String, String)> = Vec::new();

  match csv::Reader::from_path(csv_file) {
    Ok(mut reader) => {
      for res in reader.deserialize::<ArticleModel>() {
        match res {
          Ok(article) => {
            let article_title = article.title.clone();
            let author_name = article.author_name.clone();
            match add_article(db_conn.clone(), article).await {
              Ok(id) => {
                info!("article added: {}", id);
                buf += format!("{}:{}\n", article_title, id).as_str();
                ids.push((author_name, id));
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

  if let Some(out_path) = out_path {
    if let Ok(_) = create_dir_all(out_path.as_path()) {
      let mut out = OpenOptions::new()
        .create(true)
        .write(true)
        .append(true)
        .open(format!("{}/logs.txt", out_path.to_str().unwrap()))
        .expect("unable to open output file");
      let _ = out.write_all(buf.as_bytes());

      if qrcode {
        for id in ids {
          let url = format!("{url}/{}", id.1);
          let code = QrCode::new(url.as_bytes());
          if let Ok(code) = code {
            let mut out = OpenOptions::new()
              .create(true)
              .write(true)
              .append(true)
              .open(format!("{}/{}.png", out_path.to_str().unwrap(), id.0))
              .expect("unable to open qrcode file");
            let code= code.render::<Luma<u8>>().build().write_to(&mut out, ImageFormat::Png);
          } else {
            error!("unable to generate qrcode");
          }
        }
      }
    }
  }
}
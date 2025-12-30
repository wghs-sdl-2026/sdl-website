use std::fs::{write, OpenOptions};
use std::io::Write;
use std::path::PathBuf;
use log::{error, info};
use sea_orm::Database;
use crate::models::user::UserModel;
use crate::orm::user::add_user;

pub async fn import_users(csv_file: PathBuf, out_file: Option<PathBuf>) {
  let db_path = std::env::var("DB_URL").expect("db url not set");
  let db_conn = Database::connect(db_path).await.expect("unable to connect to db");
  
  let mut buf = String::new();

  match csv::Reader::from_path(csv_file) {
    Ok(mut reader) => {
      for res in reader.deserialize::<UserModel>() {
        match res {
          Ok(user) => {
            match add_user(db_conn.clone(), user.username.clone(), user.password, user.admin).await {
              Ok(id) => {
                info!("user added: {}", id);
                buf += format!("{}:{}\n", user.username, id).as_str();
              },
              Err(error) => error!("failed to add user: {:?}", error)
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
      .write(true)
      .append(true)
      .open(out_file)
      .expect("unable to open output file");
    let _ = out.write_all(buf.as_bytes());
  }

}
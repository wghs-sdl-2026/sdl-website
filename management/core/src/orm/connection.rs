use log::LevelFilter;
use sea_orm::{ConnectOptions, Database, DbConn};

pub async fn db_connect() -> DbConn {
  let db_path = std::env::var("DB_URL").expect("db url not set");
  let mut db_conn_opt = ConnectOptions::new(db_path);
  db_conn_opt.sqlx_logging(false);
  db_conn_opt.sqlx_logging_level(LevelFilter::Warn);
  Database::connect(db_conn_opt).await.expect("unable to connect to db")
}
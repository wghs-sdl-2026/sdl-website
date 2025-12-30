use clap::Parser;
use crate::article::article_import::import_articles;
use crate::opt::{ArticleCommands, Cli, Commands, UserCommands};
use crate::user::user_import::import_users;

mod opt;
mod article;
mod models;
mod orm;
mod user;

#[tokio::main]
async fn main() {
  let _ = dotenv::dotenv();

  let opt = Cli::parse();
  match opt.command {
    Commands::Article(article_opt) => {
      match article_opt.command {
        ArticleCommands::Import(article_add_opt) => {
          import_articles(article_add_opt.file, article_add_opt.out).await;
        }
      }
    }
    Commands::User(user_opt) => {
      match user_opt.command {
        UserCommands::Import(user_import_opt) => {
          import_users(user_import_opt.file, user_import_opt.out).await;
        }
        UserCommands::RangeCreate(_) => {
          unimplemented!()
        }
      }
    }
  }
}

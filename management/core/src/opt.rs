use std::path::PathBuf;
use clap::{Args, Parser, Subcommand};

#[derive(Parser, Debug)]
pub struct Cli {
  #[command(subcommand)]
  pub command: Commands,
}

#[derive(Parser, Debug)]
pub enum Commands {
  Article(ArticleOpt),
  User(UserOpt)
}

#[derive(Args, Debug)]
pub struct ArticleOpt {
  #[command(subcommand)]
  pub command: ArticleCommands
}

#[derive(Subcommand, Debug, Clone)]
pub enum ArticleCommands {
  Import(ArticleAddOpt)
}

#[derive(Args, Debug, Clone)]
pub struct ArticleAddOpt {
  pub file: PathBuf,
  #[arg(short, long)]
  pub out: Option<PathBuf>,
  #[arg(short, long, default_value_t=false)]
  pub qrcode: bool,
  #[arg(short, long, default_value_t={String::new()})]
  pub url_prefix: String,
}

#[derive(Args, Debug)]
pub struct UserOpt {
  #[command(subcommand)]
  pub command: UserCommands
}

#[derive(Subcommand, Debug, Clone)]
pub enum UserCommands {
  Import(UserImportOpt),
  RangeCreate(UserRangeCreateOpt)
}

#[derive(Args, Debug, Clone)]
pub struct UserImportOpt {
  pub file: PathBuf,
  #[arg(short, long)]
  pub out: Option<PathBuf>
}

#[derive(Args, Debug, Clone)]
pub struct UserRangeCreateOpt {
  #[arg(short, long)]
  pub from: u32,
  #[arg(short, long)]
  pub to: u32
}

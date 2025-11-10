<?php

namespace WPKirk\Console\Commands;

use VARIANT;
use WPKirk\WPBones\Console\Command;

class WordPressCommand extends Command
{
  protected $signature = 'wp:sample {--name= : Display your name}';

  protected $description = 'Example of bones command with WordPress integration';

  public function __construct()
  {
    parent::__construct();
  }

  public function handle()
  {
    $this->loadWordPress();

    $this->info('Listing users');

    $args = [
      'role' => '', // es. 'administrator', 'editor' oppure vuoto per tutti
      'orderby' => 'login', // es. 'ID', 'display_name', 'email', 'registered'
      'order' => 'ASC', // 'ASC' o 'DESC'
      'number' => 0, // 0 = tutti, oppure un numero per limitare
      'offset' => 0, // per paginazione
      'fields' => 'all', // 'all', 'all_with_meta', 'ID', 'ids', 'fields'
      'meta_key' => '', // per ordinare/filtrare per user meta
      'meta_value' => '',
    ];
    $users = get_users($args);

    foreach ($users as $user) {
      $this->line($user->ID . ' - ' . $user->display_name);
    }
  }
}

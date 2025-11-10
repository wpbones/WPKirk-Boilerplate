<?php

namespace WPKirk\Console\Commands;

use WPKirk\WPBones\Console\Command;

class SimpleCommand extends Command
{
  protected $signature = 'wpkirk:sample {--name= : Display your name}';

  protected $description = 'Example of bones command';

  public function __construct()
  {
    parent::__construct();
  }

  public function handle()
  {
    if ($this->options('name')) {
      $this->line('Hello, ' . $this->options('name'));
    } else {
      $this->line('Hello, World!');
    }
  }
}

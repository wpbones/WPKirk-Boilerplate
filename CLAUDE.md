# WPKirk-Boilerplate (Base)

The **minimum starter** — the lean scaffold everyone else builds on. JavaScript/TypeScript,
SCSS/LESS/CSS, a small React app, a Jest test. No UI kit, no opinionated patterns beyond WP Bones
itself. Use this when you want the emptiest possible v2 plugin to start from.

## What this demos

A single admin page rendered by a controller, with assets auto-discovered by the v2 webpack
pipeline:

- `resources/assets/apps/app.tsx` — React bundle mounted on `#react-app`, built to `public/apps/app.js`
- `resources/assets/js/greet.ts` — TypeScript helper with a Jest test alongside it
- `resources/assets/css/wp-kirk-common.scss` — SCSS styling, compiled to `public/css/wp-kirk-common.css`
- `plugin/Console/Commands/SimpleCommand.php` / `WordPressCommand.php` — custom `php bones` CLI commands

**Key files to read first:**

| File | What to look at |
| --- | --- |
| `webpack.config.js` | Auto-discovery rules for `apps/`, `js/`, `css/` |
| `plugin/Http/Controllers/Dashboard/DashboardController.php` | Classic controller + `view()` call |
| `resources/views/dashboard/index.php` | Blade-free view that embeds the React mount point |
| `plugin/Console/Kernel.php` | Registers custom bones CLI commands |

## Smoke test (manual, ~30s)

With the plugin active:

1. Log in to `wp-admin` and open **WP Kirk → Main View**.
2. Confirm the React app renders: _"WP Bones — Hello!"_ heading should be visible.
3. Confirm the SCSS loaded: the page uses the `.wp-kirk-*` styles.
4. Run Jest locally: `yarn test` should pass (greet + any other `__tests__`).
5. Run a sample CLI command: `php bones` should list `wpkirk:sample` and `wp:sample` among the commands.

If any of the above fail: check `wp-content/debug.log` for PHP errors, and the browser devtools
Console for runtime errors.

## Use as a template

```sh
# 1. clone from the GitHub template
gh repo create my-plugin --template wpbones/WPKirk-Boilerplate --public --clone
cd my-plugin

# 2. rename the PHP namespace + plugin slug
composer install
php bones rename "My Plugin"

# 3. build + activate
yarn install && yarn build
wp plugin activate my-plugin
```

Start swapping `resources/assets/` and `plugin/Http/Controllers/` for your own code. The webpack
config picks up new files automatically — no config edits needed.

## Framework surface exercised

This boilerplate is the **smallest regression bed** for the core WP Bones pieces every plugin
needs:

- Webpack auto-discovery for `apps/`, `js/`, `css/` (single-file React, plain TS, plain SCSS)
- `WPKirk\WPBones\View\View` + `withAdminAppsScript()` / `withAdminStyle()`
- `WPKirk\WPBones\Routing\AdminMenuProvider` reading `config/menus.php`
- `WPKirk\WPBones\Console\Kernel` registering custom CLI commands
- Jest + `@wordpress/jest-preset-default` wired through `jest.config.js`

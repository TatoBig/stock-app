
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#kit-env-publicprefix).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const USER: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_user_agent: string;
	export const STARSHIP_SHELL: string;
	export const npm_package_devDependencies_turbo: string;
	export const npm_config_bin_links: string;
	export const npm_config_wrap_output: string;
	export const BUN_INSTALL: string;
	export const GIT_ASKPASS: string;
	export const npm_node_execpath: string;
	export const npm_config_init_version: string;
	export const npm_package_devDependencies_vite: string;
	export const SHLVL: string;
	export const npm_package_packageManager: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const LESS: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const NVM_BIN: string;
	export const TERM_PROGRAM_VERSION: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const ZSH: string;
	export const LSCOLORS: string;
	export const NVM_INC: string;
	export const COREPACK_ROOT: string;
	export const npm_package_engines_node: string;
	export const npm_config_init_license: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const PAGER: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_package_scripts_check: string;
	export const npm_config_engine_strict: string;
	export const WSL_DISTRO_NAME: string;
	export const COLORTERM: string;
	export const npm_package_description: string;
	export const npm_package_dependencies__apollo_client: string;
	export const npm_package_devDependencies_typescript: string;
	export const NVM_DIR: string;
	export const npm_package_readmeFilename: string;
	export const WAYLAND_DISPLAY: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_scripts_dev: string;
	export const LOGNAME: string;
	export const npm_package_dependencies_svelte_apollo: string;
	export const npm_package_type: string;
	export const WSL_INTEROP: string;
	export const PULSE_SERVER: string;
	export const NAME: string;
	export const _: string;
	export const npm_package_private: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const TERM: string;
	export const npm_package_workspaces_0: string;
	export const npm_package_workspaces_1: string;
	export const npm_config_ignore_scripts: string;
	export const npm_package_devDependencies_eslint_plugin_svelte3: string;
	export const PATH: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const TURBO_HASH: string;
	export const XDG_RUNTIME_DIR: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const VSCODE_INJECTION: string;
	export const npm_package_devDependencies_eslint: string;
	export const LS_COLORS: string;
	export const TERM_PROGRAM: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_lifecycle_script: string;
	export const npm_config_version_git_message: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const npm_lifecycle_event: string;
	export const npm_package_version: string;
	export const npm_config_argv: string;
	export const npm_package_scripts_build: string;
	export const npm_package_dependencies_graphql: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_eslint_config_custom: string;
	export const npm_config_version_git_tag: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_strict_ssl: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_package_scripts_format: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const NVM_CD_FLAGS: string;
	export const ZDOTDIR: string;
	export const npm_package_engines_npm: string;
	export const npm_package_scripts_dev_db: string;
	export const STARSHIP_SESSION_KEY: string;
	export const npm_config_save_prefix: string;
	export const npm_config_ignore_optional: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_scripts_preview: string;
	export const HOSTTYPE: string;
	export const npm_package_scripts_dev_web: string;
	export const INIT_CWD: string;
	export const WSLENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#kit-env-publicprefix) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#kit-env-publicprefix).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		USER: string;
		npm_config_version_commit_hooks: string;
		npm_config_user_agent: string;
		STARSHIP_SHELL: string;
		npm_package_devDependencies_turbo: string;
		npm_config_bin_links: string;
		npm_config_wrap_output: string;
		BUN_INSTALL: string;
		GIT_ASKPASS: string;
		npm_node_execpath: string;
		npm_config_init_version: string;
		npm_package_devDependencies_vite: string;
		SHLVL: string;
		npm_package_packageManager: string;
		HOME: string;
		OLDPWD: string;
		LESS: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		NVM_BIN: string;
		TERM_PROGRAM_VERSION: string;
		VSCODE_IPC_HOOK_CLI: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		ZSH: string;
		LSCOLORS: string;
		NVM_INC: string;
		COREPACK_ROOT: string;
		npm_package_engines_node: string;
		npm_config_init_license: string;
		npm_package_devDependencies_svelte_preprocess: string;
		PAGER: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		YARN_WRAP_OUTPUT: string;
		npm_config_version_tag_prefix: string;
		npm_package_devDependencies_svelte_check: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_package_scripts_check: string;
		npm_config_engine_strict: string;
		WSL_DISTRO_NAME: string;
		COLORTERM: string;
		npm_package_description: string;
		npm_package_dependencies__apollo_client: string;
		npm_package_devDependencies_typescript: string;
		NVM_DIR: string;
		npm_package_readmeFilename: string;
		WAYLAND_DISPLAY: string;
		npm_package_devDependencies_prettier: string;
		npm_package_scripts_dev: string;
		LOGNAME: string;
		npm_package_dependencies_svelte_apollo: string;
		npm_package_type: string;
		WSL_INTEROP: string;
		PULSE_SERVER: string;
		NAME: string;
		_: string;
		npm_package_private: string;
		npm_package_scripts_check_watch: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		TERM: string;
		npm_package_workspaces_0: string;
		npm_package_workspaces_1: string;
		npm_config_ignore_scripts: string;
		npm_package_devDependencies_eslint_plugin_svelte3: string;
		PATH: string;
		NODE: string;
		npm_package_name: string;
		TURBO_HASH: string;
		XDG_RUNTIME_DIR: string;
		DISPLAY: string;
		LANG: string;
		VSCODE_INJECTION: string;
		npm_package_devDependencies_eslint: string;
		LS_COLORS: string;
		TERM_PROGRAM: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_lifecycle_script: string;
		npm_config_version_git_message: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		npm_lifecycle_event: string;
		npm_package_version: string;
		npm_config_argv: string;
		npm_package_scripts_build: string;
		npm_package_dependencies_graphql: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_eslint_config_custom: string;
		npm_config_version_git_tag: string;
		npm_config_version_git_sign: string;
		npm_config_strict_ssl: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_package_scripts_format: string;
		PWD: string;
		npm_execpath: string;
		NVM_CD_FLAGS: string;
		ZDOTDIR: string;
		npm_package_engines_npm: string;
		npm_package_scripts_dev_db: string;
		STARSHIP_SESSION_KEY: string;
		npm_config_save_prefix: string;
		npm_config_ignore_optional: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_scripts_preview: string;
		HOSTTYPE: string;
		npm_package_scripts_dev_web: string;
		INIT_CWD: string;
		WSLENV: string;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#kit-env-publicprefix) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: string]: string | undefined;
	}
}

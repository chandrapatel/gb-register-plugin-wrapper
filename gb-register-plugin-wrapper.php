<?php
/**
 * Plugin Name:       Gutenberg Register Plugin Wrapper
 * Description:       This plugin provides wrapper to register plugin for custom meta fields in easy way.
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Chandra Patel
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gb-register-plugin-wrapper
 *
 * @package           gb-register-plugin-wrapper
 */

define( 'GBRPW_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'GBRPW_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

require_once __DIR__ . '/register-meta.php';

/**
 * Register meta script for `post` post type.
 *
 * @return void
 */
function gbrpw_editor_scripts() {

	$screen = get_current_screen();

	if ( ! $screen || ! property_exists( $screen, 'post_type' ) ) {
		return;
	}

	$asset_config = require GBRPW_PLUGIN_PATH . 'build/index.asset.php';

	if ( 'post' === $screen->post_type ) {

		wp_enqueue_script(
			'gbrpw-post-meta',
			GBRPW_PLUGIN_URL . 'build/index.js',
			$asset_config['dependencies'],
			$asset_config['version'],
			true
		);

	}

}

add_action( 'enqueue_block_editor_assets', 'gbrpw_editor_scripts' );

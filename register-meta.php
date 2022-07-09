<?php
/**
 * Register post meta fields.
 *
 * @package gb-register-plugin-wrapper
 */

/**
 * Register post meta fields.
 *
 * @return void
 */
function gbrpw_register_post_meta_fields() {

	register_post_meta(
		'post',
		'meta_type_text',
		array(
			'type'         => 'string',
			'single'       => true,
			'show_in_rest' => true,
		)
	);

	register_post_meta(
		'post',
		'meta_type_textarea',
		array(
			'type'         => 'string',
			'single'       => true,
			'show_in_rest' => true,
		)
	);

	register_post_meta(
		'post',
		'meta_type_radio',
		array(
			'type'         => 'string',
			'single'       => true,
			'show_in_rest' => true,
		)
	);

	register_post_meta(
		'post',
		'meta_type_checkbox',
		array(
			'type'         => 'boolean',
			'single'       => true,
			'show_in_rest' => true,
		)
	);

}

add_action( 'init', 'gbrpw_register_post_meta_fields' );

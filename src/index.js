import { __ } from '@wordpress/i18n';
import { GBRPW_Register_Plugin } from './register-plugin';

/** Custom Meta Fields */

const metaFields1 = {
	pluginName: 'meta-plugin-1',
	name: 'meta_fields_1',
	title: __( 'Meta Fields - Text / Textarea', 'gb-register-plugin-wrapper' ),
	className: 'meta-fields-1',
	icon: null,
	fields: [
		{
			label: __( 'Text Control', 'gb-register-plugin-wrapper' ),
			type: 'text',
			meta: 'meta_type_text',
		},
		{
			label: __( 'Textarea Control', 'gb-register-plugin-wrapper' ),
			type: 'textarea',
			meta: 'meta_type_textarea',
		}
	]
};

const metaFields2 = {
	pluginName: 'meta-plugin-2',
	name: 'meta_fields_2',
	title: __( 'Meta Fields - Radio / Checkbox', 'gb-register-plugin-wrapper' ),
	className: 'meta-fields-2',
	icon: null,
	fields: [
		{
			label: __( 'Radio Control', 'gb-register-plugin-wrapper' ),
			type: 'radio',
			meta: 'meta_type_radio',
			options: [
				{
					label: __( 'Yes', 'gb-register-plugin-wrapper' ),
					value: 'yes'
				},
				{
					label: __( 'No', 'gb-register-plugin-wrapper' ),
					value: 'no'
				},
			]
		},
		{
			label: __( 'Checkbox Control', 'gb-register-plugin-wrapper' ),
			type: 'checkbox',
			meta: 'meta_type_checkbox',
		}
	]
};

new GBRPW_Register_Plugin( metaFields1 );
new GBRPW_Register_Plugin( metaFields2 );

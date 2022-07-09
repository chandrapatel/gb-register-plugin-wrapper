# Gutenberg Register Plugin Wrapper

This plugin provides way to register plugin for custom meta fields where no need to call [registerPlugin](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/#registerplugin) to register different plugin, no need to create components to render controls for custom meta fields and no need to handle of displaying and saving custom meta fields.

## Why?

There are many plugins available which provides easy way to register custom meta boxes in PHP. Since Gutenberg / Block Editor, we can register custom meta fields using [registerPlugin](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-plugins/#registerplugin) so I thought to create wrapper/abstraction layer where developer need to pass custom fields data in object format and rest will be handle by wrapper/abstraction layer.

## Importat Notes

- Currently, it supports [PluginDocumentSettingPanel](https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-document-setting-panel/) SlotFill.
- Created WordPress plugin for development and testing. If you want to use it then copy JS files from [src](src) folder in your plugin or theme folder and perform build.
- Metadata saved using REST API so you need to register meta for post type using `register_post_meta()` function. Please check [register-meta.php](register-meta.php) file.
- This is in early stage and still it's in-progress. Consider this as proof of concept.

## Supported form elements and input types

- TextControl
- TextareaControl
- RadioControl
- CheckboxControl

## Usage

You need to create object with key/value pairs for plugin name, icon, class name, fields and etc. After that initialize `GBRPW_Register_Plugin` class and pass that object. Following is the example.

Please check [src/index.js](src/index.js) file.

```js
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

new GBRPW_Register_Plugin( metaFields1 );
```

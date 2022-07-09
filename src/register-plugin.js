/**
 * Wrapper/Abstraction for registering meta fields.
 */

import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

import RenderMetaBox from './render-meta';

export class GBRPW_Register_Plugin {

	/**
	 * Meta
	 *
	 * @param object meta Meta
	 */

	constructor( meta ) {

		this.meta = meta;

		registerPlugin(
			meta.pluginName,
			{
				icon: meta.icon,
				render: () => this.renderPlugin()
			}
		);

	}

	renderPlugin() {

		return (
			<PluginDocumentSettingPanel
				name={ this.meta.name }
				title={ this.meta.title }
				className={ this.meta.className }
			>

				<RenderMetaBox metaFields={ this.meta.fields } />

			</PluginDocumentSettingPanel>
		);

	}

}

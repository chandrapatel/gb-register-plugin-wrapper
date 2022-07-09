import { useSelect, useDispatch } from '@wordpress/data';
import { TextControl, TextareaControl } from '@wordpress/components';
import { RadioControl, CheckboxControl } from '@wordpress/components';

const RenderMetaBox = ( props ) => {

	let metaData = [];

	props.metaFields.forEach( ( metaField, index ) => {

		let { metaValue } = useSelect( ( select ) => {
			return {
				metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ metaField.meta ],
			};
		} );

		let { editPost } = useDispatch( 'core/editor', [ metaField.meta ] );

		metaData[ index ] = {
			getMeta: metaValue,
			setMeta: editPost
		};

	} );

	// Add all input fields required in a meta-box here.
	return (
		<>
			{
				props.metaFields.map( ( metaField, index ) => {

					if ( 'text' === metaField.type ) {
						return (
							<>
								<TextControl
									label={ metaField.label }
									value={ metaData[ index ].getMeta }
									onChange={ ( value ) => metaData[ index ].setMeta( { meta: { [ metaField.meta ]: value } } ) }
								/>
								{ ( ( index + 1 ) !== props.metaFields.length  ) && <hr/> }
							</>
						)
					} else if ( 'textarea' === metaField.type ) {
						return (
							<>
								<TextareaControl
									label={ metaField.label }
									value={ metaData[ index ].getMeta }
									onChange={ ( value ) => metaData[ index ].setMeta( { meta: { [ metaField.meta ]: value } } ) }
								/>
								{ ( ( index + 1 ) !== props.metaFields.length  ) && <hr/> }
							</>
						)
					} else if ( 'radio' === metaField.type ) {
						return (
							<>
								<RadioControl
									label={ metaField.label }
									options={ metaField.options }
									selected={ metaData[ index ].getMeta }
									onChange={ ( value ) => metaData[ index ].setMeta( { meta: { [ metaField.meta ]: value } } ) }
								/>
								{ ( ( index + 1 ) !== props.metaFields.length  ) && <hr/> }
							</>
						)
					} else if ( 'checkbox' === metaField.type ) {
						return (
							<>
								<CheckboxControl
									label={ metaField.label }
									checked={ metaData[ index ].getMeta }
									onChange={ ( value ) => metaData[ index ].setMeta( { meta: { [ metaField.meta ]: value } } ) }
								/>
								{ ( ( index + 1 ) !== props.metaFields.length  ) && <hr/> }
							</>
						)
					}
				} )
			}
		</>
	)

}

export default RenderMetaBox;

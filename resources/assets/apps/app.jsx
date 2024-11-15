import { __ } from '@wordpress/i18n';

const { render } = wp.element;

const MyApp = () => {
  return (
    <>
      <h2>{__('Say Hello, WP Bones Application', 'wp-kirk')}</h2>
    </>
  );
};

render(<MyApp />, document.getElementById('react-app'));

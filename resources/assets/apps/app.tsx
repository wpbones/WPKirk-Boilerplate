import { createRoot } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { formatGreeting } from '../js/greet';

const App = () => {
  const greeting = formatGreeting(__('WP Bones', 'wp-kirk'));

  return (
    <section>
      <h2>{greeting}</h2>
      <p>
        {__(
          'This React bundle ships with TypeScript and WordPress i18n, auto-discovered by webpack.',
          'wp-kirk'
        )}
      </p>
    </section>
  );
};

const container = document.getElementById('react-app');
if (container) {
  createRoot(container).render(<App />);
}

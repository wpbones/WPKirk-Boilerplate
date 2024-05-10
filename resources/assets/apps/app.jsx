const { render } = wp.element;

const MyApp = () => {
  return (
    <>
      <h2>Say Hello, WP Bones Application</h2>
    </>
  );
};

render(<MyApp />, document.getElementById('react-app'));

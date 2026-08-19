export function mountBabelApp(sourceElement, rootElement) {
  const compiled = window.Babel.transform(sourceElement.textContent, {
    presets: ['react'],
  }).code;

  const execute = new Function(compiled);
  execute();

  if (!rootElement.dataset.mounted) {
    throw new Error('The application did not mount.');
  }
}

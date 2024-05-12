import { render, screen } from '@testing-library/react';
import { MaterialApp } from '.';

describe('MaterialApp', () => {
  it('render', async () => {
    render(<MaterialApp>foobar</MaterialApp>);
    await screen.findByText('foobar');
  });
});

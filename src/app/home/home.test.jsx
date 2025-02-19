import { render, screen } from '@testing-library/react';

import Home from './home';

describe("Home page", () => {
	test("renders correctly", () => {
		render(<Home />);
	});
});

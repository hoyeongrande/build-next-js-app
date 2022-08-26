import React from "react";
import { render } from "@testing-library/react";
import Menu from "../components/Menu";

describe('Menu는', () => {
    it('nextclass라는 텍스트를 가지고 있어야 한다', () => {
      const { getByText } = render( <Menu /> );
      const menuText = getByText('nextclass');
      expect(menuText).toBeInTheDocument();
    }); 
  })
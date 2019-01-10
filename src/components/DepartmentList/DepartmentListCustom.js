import React, { Fragment } from "react";

import uuidv1 from 'uuid/v1';
import { List } from '@groceristar/grocery-component';

import IngredientCustomList from '../Ingredients/IngredientCustomList.js';

//@TODO it's should be tested, because i'm not recollecting if this working thing or should be finished

const Wrapper = ({ children }) => (
  <Collapse accordion>{children}</Collapse>
);


const RenderItem = ({ data, id }) => {

  return (
    <Fragment>
      <IngredientCustomList
        id={id}
        department={data.department}
        ingredients={data.ingredients}
      />
    </Fragment>
  )
}

const DepartmentListCustom = ({ items }) => (
    <List items={items}>
      {(data) =>
        <RenderItem data={data} key={uuidv1()} id={uuidv1()} />
      }
    </List>
);

export default DepartmentListCustom;

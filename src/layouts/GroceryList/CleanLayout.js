import React, { Component, Fragment } from 'react';

// if we want to use antd styles we should include them
// import "antd/dist/antd.css";

import { DepartmentList } from '@groceristar/grocery-component'
// import DepartmentListCollapse from '../components/DepartmentList/DepartmentListCollapse'


import {
  getGroceryById,
  getFullGrocery,
  // getGroceryDataFromId
} from "../../selectors/selector";

class CleanLayout extends Component {


  render() {

    const { id } = this.props.match.params;

    // 1. console.log( getGroceryCollection() );




    // @TODO maybe we can move this things into selectors?
    // lately we wouldn't need to convert id to number
    let grocery = getGroceryById(parseInt(id, 10))[0];
    // console.log(grocery)

    let groceryName = grocery.name;
    let groceryWithDepAndIng = getFullGrocery(groceryName);



    // 2. let data = getGroceryDataFromId(this.state.id);


  // 3. console.log( getGroceryById(id) );


    return (
      <Fragment>
        <DepartmentList items={groceryWithDepAndIng} />
      </Fragment>
    );
  }
}

export default CleanLayout;

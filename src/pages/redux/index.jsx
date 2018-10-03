import React from 'react';
import Helmet from 'react-helmet';
import './style.scss';

import OutputData from './1__OutputData';
import ChangeDataInside from './2__ChangeDataInside';
import ChangeDataOutside from './3__ChangeDataOutside';
import AddDataWhenLoad from './4__AddDataWhenLoad';

export default function Redux () {
  return(
    <div>
      <Helmet title='Redux page' />
      <h1>Redux page </h1><hr />
      <OutputData/> <br/><br/>
      <ChangeDataInside/> <br/><br/>
      <ChangeDataOutside/> <br/><br/>
      <AddDataWhenLoad/> <br/><br/>
    </div>
  );
}

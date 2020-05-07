import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Loading } from '../components';
import { useHistory, useLocation, Link } from 'react-router-dom';
import chipmunk from '../components/icon/chipmunk.jpeg';
import { usePageSetting } from '../hooks';
import './page.css';

export default function MainPage() {
  const [{employee, isLoading}, setEmployee, startLoading, endLoading] = usePageSetting();
  return (
    <Layout>
      <div style={{backgroundColor: 'white', alignItems: 'center'}}>
        <img src={chipmunk} alt='다람쥐' style={{  display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%'}}/>
      </div>
      {employee.map(value => {
        return (
            <ul key={value.id} id='employee'>
              <li>
              age: {value.employee_age}
              </li>
              <li>
              name: {value.employee_name}
              </li>
              <li>
              salary : {value.employee_salary}
              </li>
            </ul>
        )
      })}
      <Loading open={isLoading} />
    </Layout>
  );
}

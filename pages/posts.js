import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { getComments } from '../actions';
import { initializeStore } from '../store';

const Posts = () => {
  const dispatch = useDispatch();
  const data = useSelector((data) => data);

  console.log('Posts Page Data Reducer :>> ', data);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  return (
    <>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </>
  );
};

export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  await dispatch(getComments());

  return { props: { initialReduxState: reduxStore.getState() } };
}

export default Posts;

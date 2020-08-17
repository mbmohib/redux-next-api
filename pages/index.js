import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { getPosts } from '../actions';
import Examples from '../components/examples';
import { initializeStore } from '../store';

const Index = () => {
  const dispatch = useDispatch();
  const data = useSelector((data) => data);

  console.log('Index Page Data Reducer :>> ', data);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Examples />
      <Link href="/posts">
        <a>Go to posts</a>
      </Link>
    </>
  );
};

export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  await dispatch(getPosts());

  return { props: { initialReduxState: reduxStore.getState() } };
}

export default Index;

import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEthers } from '@usedapp/core';
import toast from 'react-hot-toast';

import { User } from '@/components/home/BetaTest';

import {
  selectUser,
  selectShowInTheTable,
  setUser,
  listUserToTheTable,
  delistUserFromTheTable,
} from '@/slices/userSlice';
import { useGetUsersQuery } from '@/API/userApi';

const useBetaTest = () => {
  const { account } = useEthers();
  const dispatch = useDispatch();

  // get current user from store
  const user = useSelector(selectUser);

  // value for list user in the table
  const showTableUser = useSelector(selectShowInTheTable);

  // get other users
  const { data, error } = useGetUsersQuery(0);

  // fetch users error handler
  useEffect(() => {
    if (error) {
      toast.error('Something went wrong.');
    }
  }, [error]);

  const formSubmitHandler = useCallback(
    (name: string, email: string) => {
      if (!account) {
        toast.error('Need to connect metamask.');
        return;
      }
      const user: User = {
        id: 0,
        username: name,
        email: email,
        address: account,
      };
      dispatch(setUser(user));
    },
    [account, dispatch]
  );

  // table handlers for current user
  const showUserHandler = () => {
    dispatch(listUserToTheTable());
  };
  const delistUserHandler = () => {
    dispatch(delistUserFromTheTable());
  };
  return {
    user,
    showTableUser,
    data,
    formSubmitHandler,
    showUserHandler,
    delistUserHandler,
  };
};

export default useBetaTest;

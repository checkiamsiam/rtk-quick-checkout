import { useDispatch, useSelector } from "react-redux";
import { useCreateUserMutation, useGetSingleUsersQuery } from "./features/Users/userApi";
import { getUserSelector } from "./features/Users/userSelectors";
import { setUser } from "./features/Users/userSlice";

function App() {
  // get State from redux
  const users = useSelector(getUserSelector);
  // get dispatch func
  const dispatch = useDispatch();

  // dispatch any action
  dispatch(setUser({ name: "ali", age: 20 }));

  // besics of query
  const { refetch, data, isLoading, isError, isSuccess, isUninitialized } = useGetSingleUsersQuery(null, {
    // you can skip by any condition
    skip: true,
    // refetch on any mount or arg change
    refetchOnMountOrArgChange: true,
    // poll again after a time
    pollingInterval: 5000000,
  });

  // besics of mutation
  // all mutation process is same

  const [
    createUser,
    { isUninitialized: mutaionUninit, isError: mutationIsError, isLoading: isMutationLoading, isSuccess: IsmutationSuccess, data: mutationResponse },
  ] = useCreateUserMutation();

  const handleCreateUser = async () => {
    await createUser({ name: "ali", age: 20 });
  };

  return (
    <>
      <h1>Rtk + React</h1>
      <h3>nothing in there. this is just a codebase to memorize redux concepts</h3>
    </>
  );
}

export default App;

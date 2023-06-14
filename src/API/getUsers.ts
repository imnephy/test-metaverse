import axios from 'axios';

const getUsers = async () => {
  const {
    data: { items },
  } = await axios.get(
    'https://new-backend.unistory.app/api/data?page=0&perPage=20'
  );

  return items;
};

export default getUsers;

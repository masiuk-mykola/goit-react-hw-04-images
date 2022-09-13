import { Grid } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Grid
      height="80"
      width="80"
      color="#3f51b5"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

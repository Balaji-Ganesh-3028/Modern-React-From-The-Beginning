import { BarLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
};

const Spinner = ({ color = 'blue' }: { color?: string }) => {
  return ( <div>
      <BarLoader
        color={color}
        cssOverride={override}
        width={150}
        height={4}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div> );
}
 
export default Spinner;
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='bg-white'>
      <Link to='/login' >Get started</Link>
    </div>
  )
}

export default HomePage
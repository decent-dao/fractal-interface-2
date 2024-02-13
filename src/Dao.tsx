import { useParams } from 'react-router-dom'

function Dao() {
  const params = useParams();

  return (
    <div>DAO {params['id']}</div>
  )
}

export default Dao

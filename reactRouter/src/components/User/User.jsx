
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div
      className="bg-blue-100
text—white text—3xl p-4 h-[45vh] text-center "
    >
      User : {userid}
    </div>
  );
}

export default User

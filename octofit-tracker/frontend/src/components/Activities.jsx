import { useEffect, useState } from 'react';
import { codespaceName, fetchJson } from '../utils/api';

// Fallback to localhost avoids an invalid https://undefined-8000... URL when VITE_CODESPACE_NAME is unset.
const API_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJson(API_URL)
      .then(setActivities)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading activities...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <div>
      <h2>Activities</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Type</th>
            <th>Duration (min)</th>
            <th>Calories Burned</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity._id}>
              <td>{activity.type}</td>
              <td>{activity.durationMinutes}</td>
              <td>{activity.caloriesBurned}</td>
              <td>{activity.date ? new Date(activity.date).toLocaleDateString() : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;

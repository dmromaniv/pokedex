import styles from './StatsTable.module.scss';

const StatsTable = ({ stats }) => {
  const statsPoints = stats?.length ? stats.map((stat) => stat.base_stat) : [];
  const minPoints = Math.min(...statsPoints);
  const maxPoints = Math.max(...statsPoints);


  if (!stats?.length) {
    return <p>No available info</p>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.headData}>Type</th>
          <th className={styles.headData}>Fire</th>
        </tr>
      </thead>
      <tbody>
        {stats?.length > 0 ? (
          stats?.map((stat, index) => {
            let formattedText = '';
            if (stat.stat.name === 'special-defense') {
              formattedText = 'SP Defense';
            } else if (stat?.stat?.name === 'special-attack') {
              formattedText = 'SP Attack';
            } else {
              formattedText = stat?.stat?.name;
            }
            return (
              <tr key={index}>
                <td className={styles.bodyData}>{formattedText}</td>
                <td
                  className={`${styles.bodyData} ${styles.points} 
                ${minPoints === stat.base_stat ? styles.minPoints : ''} 
                ${maxPoints === stat.base_stat ? styles.maxPoints : ''}`}
                >
                  {stat.base_stat}
                </td>
              </tr>
            );
          })
        ) : (
          <tr>No available info</tr>
        )}
      </tbody>
    </table>
  );
};

export default StatsTable;

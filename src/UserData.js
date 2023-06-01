import { Button, styled, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import data from './data'; // Import the data from the data.js file

const Blog = styled('div')({
  width: '90%',
  top: '110px',
  marginLeft: '90px',
  position: 'absolute',
  background: 'white',
  '@media (max-width: 768px)': {
    width: '100%',
    marginLeft: '0',
    top: '0',
    position: 'static',
    padding: '20px',
  },
});

const CenteredContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const UserData = () => {
  const { id } = useParams();

  // Find the user with the matching ID from the data array
  const user = data.find((user) => user.show.id.toString() === id);

  if (!user || !user.show) {
    return <div>User not found</div>;
  }

  const { name, image, summary, url, type, language, genres, status, premiered, officialSite, schedule, rating, weight, network } = user.show;

  // Check if network exists before accessing its properties
  const networkName = network ? network.name : '';
  const countryName = network && network.country ? network.country.name : '';

  return (
    <CenteredContainer>
      <div style={{ background: 'white', width: '100vw' }}>
        <Blog>
          <div style={{ marginBottom: '40px' }}>
            <Typography variant="h4" style={{ fontWeight: 'bold', textAlign: 'center' }}>{name}</Typography>
            <center>
              {image && <img src={image.medium} alt="" style={{ width: '75%', height: 'auto', marginTop: '20px' }} />}
            </center>
            <Typography variant="body1" style={{ marginTop: '20px' }}>
              <strong>Type:</strong> {type}
              <br />
              <strong>Language:</strong> {language}
              <br />
              <strong>Genres:</strong> {genres.join(', ')}
              <br />
              <strong>Status:</strong> {status}
              <br />
              <strong>Premiered:</strong> {premiered}
              <br />
              <strong>Official Site:</strong> <a href={officialSite} target="_blank" rel="noopener noreferrer">{officialSite}</a>
              <br />
              <strong>Schedule:</strong> {schedule.days.join(', ')} at {schedule.time}
              <br />
              <strong>Rating:</strong> {rating.average}
              <br />
              <strong>Weight:</strong> {weight}
              <br />
              <strong>Network:</strong> {networkName} ({countryName})
              <br />
              <strong>Summary:</strong> {summary}
            </Typography>
            <br />
            <center>
              <Button variant='contained' component={Link} to='/'>Back</Button>
              <Button variant='contained' component='a' href={url} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>More Info</Button>
            </center>
          </div>
        </Blog>
      </div>
    </CenteredContainer>
  );
};

export default UserData;

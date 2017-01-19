import Keen from 'keen-tracking';

function track() {
  return new Promise((resolve, reject) => {
    const client = new Keen({ projectID: 'fake', writeKey: 'fake' });
    resolve(true);
  });
}

export default track;

const BOX_API_ENDPOINT = 'https://api.box.com/2.0';

const getPDFText = async (event, context) => {
  let queryParams = JSON.parse(event.body);
  console.log('queryParams: ', queryParams);
  // const queryStringParameters = event.queryStringParameters || {};
  // console.log('queryStringParameters: ', queryStringParameters);

  const fileId = queryParams.source.id;
  const fileReadToken = queryParams.token.read.access_token;
  let fileDownloadURL = `${BOX_API_ENDPOINT}/files/${fileId}/content?access_token=${fileReadToken}`;
  console.log('fileDownloadURL: ', fileDownloadURL);
  //upload file into bucket

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      data: 'tungdo',
    })
  }
};

const ping = async (_event, _context) => {
  return {
    statusCode: 200,
    body: "pong"
  }
};

module.exports = {
  getPDFText,
  ping,
}

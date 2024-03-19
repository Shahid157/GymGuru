import axios from 'axios';
import AppConfig from '../utils/Config';
import {APIHANDLER} from './apiConfig';

jest.mock('axios');
const config = AppConfig();
describe('APIHANDLER Function', () => {
  it('should make a successful API request', async () => {
    const mockResponse = {
      data: 'Mock Response Data',
      status: 200,
    };
    axios.mockResolvedValue(mockResponse);

    const result = await APIHANDLER('GET', '/api/route', {}, 'your-api-key');

    expect(result).toEqual(mockResponse);
    expect(axios).toHaveBeenCalledWith({
      method: 'GET', // or 'POST' based on your test case
      url: `${config.apiUrl}${'/api/route'}`, // Updated key from 'route' to 'url'
      data: {}, // Your test case might have specific data
      headers: {
        Authorization: `Bearer ${'your-api-key'}`,
      },
    });
  });

  it('should handle API request error', async () => {
    const mockError = {
      response: {
        data: 'Error Response Data',
        status: 400,
      },
    };
    axios.mockRejectedValue(mockError);

    const result = await APIHANDLER(
      'POST',
      '/api/route',
      {key: 'value'},
      'your-api-key',
    );

    expect(result).toEqual(mockError);
    expect(axios).toHaveBeenCalledWith({
      method: 'GET', // or 'POST' based on your test case
      url: `${config.apiUrl}${'/api/route'}`, // Updated key from 'route' to 'url'
      data: {}, // Your test case might have specific data
      headers: {
        Authorization: `Bearer ${'your-api-key'}`,
      },
    });
  });
});

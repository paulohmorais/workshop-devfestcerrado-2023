import http from 'k6/http'

export const options = {
  stages: [
    { duration: '2m', target: 4 },
    { duration: '2m30s', target: 1 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
    http.get('http://localhost:3000/page1');
    http.get('http://localhost:3000/page2');
    http.get('http://localhost:3000/healthcheck');
    http.get('http://localhost:3000/errortest');
    http.get('http://localhost:3000/api1');
    http.get('http://localhost:3000/api1-cached');
    http.get('http://localhost:3000/api2');
    http.get('http://localhost:3000/api2-cached');
}
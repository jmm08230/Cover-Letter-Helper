const axios = require('axios');

// 서버 URL 설정
const SERVER_URL = 'http://localhost:5000';

// GET 요청 보내기
axios.get(SERVER_URL)
    .then(response => {
        console.log('GET Response:', response.data);
    })
    .catch(error => {
        console.error('Error in GET request:', error);
    });

// POST 요청 보내기
/*
axios.post(SERVER_URL, {
    data_1: 'value1re',
    data_2: 'value2re',
    data_3: 'value3',
    data_4: 'value4',
    data_5: 'value5',
    data_6: 'value6'
})
    .then(response => {
        console.log('POST Response:', response.data);
    })
    .catch(error => {
        console.error('Error in POST request:', error);
    });
*/
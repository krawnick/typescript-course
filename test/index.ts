const fetchData = (url: string, method: 'GET' | 'POST'): void => {
  console.log('Fetched')
}

const reqOpt =
  // : {
  //   url: string
  //   method: 'GET' | 'POST'
  // }
  {
    url: 'https://someurl.com',
    method: 'GET',
  }

fetchData('qqq', 'GET')
fetchData(reqOpt.url, reqOpt.method as 'GET')

// 9:55

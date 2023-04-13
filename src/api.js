const fetchData = () => {
  return (fetch(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=cq4aYmNGBvd9aDRMUGPIRwJV7npnH3ac`)
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(`${response.status} ${response.statusText}`)
    }
  }))
}

  export { fetchData }
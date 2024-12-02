function api(resquest,response){
  const dynamicdate = new Date();

  response.json({
    date:dynamicdate.toDateString()
  })
}

export default api;
function page(resquest,response){
  const dynamicdate = new Date();

  response.json({
    date:dynamicdate.toDateString()
  })
}


export default page;
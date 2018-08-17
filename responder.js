const greet=(line,data)=>{
    if(line==='ur mom gay'){
      if(data.friend){
        return('haha yeah')
      }
      return 'no u'
    }
    if(line==='friend'){
      data.friend=true
      return 'yes'
    }
    return ''
  }
  
  const getRandomInt=_=>{
    return Math.floor(Math.random() * Math.floor(_))
  }
  const rolldie=_=>{
    return(getRandomInt(_)+1)
  }
  
  
  const rollXdY=(line,data)=>{
    let regex=/^roll \d+d\d+$/
    if (regex.test(line)){
      console.log(line)
      let rolldata=line.match(/\d+/g)
      let rollct=parseInt(rolldata[0])
      let sides=parseInt(rolldata[1])
      let rolllist=[]
      for (let i=0;i<rollct;i++){
        let a=rolldie(sides)
        rolllist.push(a)
      }
      let sum=rolllist.reduce((a,b)=>a+b,0)
      return(`${rolllist}\n${sum}`)
    }
    
    return ''
  }
  const responders=[greet,rollXdY]
  module.exports=(line,ctext)=>{
    for (let r of responders){
      let response=r(line,ctext)
      if (response)return response
    }
  }
  
const fetch=require('node-fetch')

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

const eightball=(line,data)=>{
  let answers=[
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes - definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
  ] 
  let regex=/^eightball/
  if (regex.test(line)){
    return (answers[getRandomInt(20)])
  }
  return ''
}
/*
const lenny=(line,ctext)=>{
  if(line==='lenny'){
    console.log('retrieving lenny')
    fetch('https://api.lenny.today/v1/random?limit=1')
    .then(_=>_.json())
    .then(_=>_[0].face)
    .then(_=>console.log(_))
  }
  console.log("I'm a lazy program")

  return ''
}
*/
const responders=[greet,rollXdY,eightball/*,lenny*/]
module.exports=(line,ctext)=>{
  for (let r of responders){
    let response=r(line,ctext)
    if (response)return response
  }
  return ''
}

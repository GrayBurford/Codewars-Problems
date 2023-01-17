// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  let domain = '';
  let slicedDomain = '';
  
  if (url.includes('www')) {
    slicedDomain = url.slice(url.indexOf('w') + 4);
  }
  
  else if (url.includes('http://')) {
    slicedDomain = url.slice(url.indexOf('/') + 2)
  }
  
  else if (url.includes('https://')) {
    slicedDomain = url.slice(url.indexOf('/') + 2)
  }
  
  else {
    slicedDomain = url;
  }
  
  for (char of slicedDomain) {
    if (char === '.') return domain;
    domain += char;
  }
  return url;
}

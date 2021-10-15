export default {
  getUrl(){
    let url = ''
    if(process.browser){
      const { hostname, protocol } = window.location;
      hostname === 'localhost' ? url = `${protocol}//${hostname}:4200` : url = `${protocol}//${hostname}`;
    } else{
      url = `http://localhost:4200`;
    }
    return url;
  }
}

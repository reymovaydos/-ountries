import loaderToggle from "./loader";
const request = async (resource)=>{
    loaderToggle(true)
    console.log('loading...');
    const req = await fetch(resource);
    if(!req.ok){
        loaderToggle(false)
        throw new Error("Something went wrong")
    }
    const data = await req.json()
    loaderToggle(false)
    console.log('Done !');
    return data
}
export default request
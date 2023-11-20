const getHttpConfig = () => {
   {
    headers : {
        Authorization : `Bearer ${localStorage.getItem("token")}`
    }
   }
}
export default getHttpConfig;